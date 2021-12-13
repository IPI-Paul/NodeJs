
const globalLoc = require('../globals');
let models = require('../models');
let validator = require(globalLoc + 'validator');


const validateCreateLead = function(errors, req) {
	if (!validator.isEmail(req.body.lead_email)) {
		errors['message'] = 'Please use a valid email.';
		errors['email'] = req.body.lead_email;
	}
}

exports.validateLead = function(errors, req) {
	return new Promise(function(resolve, reject){
		validateCreateLead(errors, req);
		return models.Lead.findOne({
			where: {
				email: req.body.lead_email
			}
		}).then(e => {
			if (e !== null) {
				errors['message'] = 'Email is already in use.';		
				errors['email'] = req.body.lead_email;	
			}
			resolve(errors);
		});		
	});
}
