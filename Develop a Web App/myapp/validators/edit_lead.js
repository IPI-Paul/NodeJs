
const globalLoc = require('../globals');
let models = require('../models');
let validator = require(globalLoc + 'validator');


const validateCreateLead = function(errors, req) {
	if (!validator.isEmail(req.body.lead_email)) {
		errors['message'] = 'Please use a valid email.';
		errors['email'] = req.body.lead_email;
	}
}

exports.validateEditLead = function(errors, req) {
	return new Promise(function(resolve, reject){
		validateCreateLead(errors, req);
		return models.Lead.findAll({
			where: {
				email: req.body.lead_email
			}
		}).then(e => {
			if (e !== null && e.length > 1) {
				errors['message'] = 'Email is already in use.';		
				errors['email'] = req.body.lead_email;	
			} else if (e !== null && e.length > 0 && e[0].dataValues.id !== req.params.lead_id) {
				errors['message'] = 'Email is already in use.';		
				errors['email'] = req.body.lead_email;					
			}
			resolve(errors);
		});		
	});
}
