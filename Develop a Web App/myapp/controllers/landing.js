
const global = require('../globals');
const models = require('../models');

const { isEmpty } = require(global + 'lodash');
const { validateLead } = require('../validators/lead');
const { validateEditLead } = require('../validators/edit_lead');

exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'Express', user: req.user });
}

const rerender_Lead = function(errors, req, res, next) {
	res.render('landing', { formData: req.body, errors: errors });
}

exports.submit_lead = function(req, res, next) {
	let errors = {};
	return validateLead(errors, req).then(errors => {
		if (!isEmpty(errors)) {
			rerender_Lead(errors, req, res, next);
		} else {
		  return models.Lead.create({
		  	email: req.body.lead_email
		  }).then(lead => {
		  	if (req.user && req.user.is_admin == true)
		  		res.redirect('/leads');
		  	else
		  		res.redirect('/');
		  })			
		}
	});
}

exports.show_leads = function(req, res, next) {
	return models.Lead.findAll().then(leads => {
		res.render('lead/leads', { title: 'Express', leads: leads, user: req.user });		
	});
}

exports.show_lead = function(req, res, next) {
	return models.Lead.findOne({
		where: {
			id: req.params.lead_id
		}
	}).then(lead => {
		res.render('lead/lead', { lead: lead, user: req.user});
	});
}

exports.show_edit_lead = function(req, res, next) {
	return models.Lead.findOne({
		where: {
			id: req.params.lead_id
		}
	}).then(lead => {
		res.render('lead/edit_lead', { lead: lead, user: req.user});
	});
}

const rerender_edit_Lead = function(errors, req, res, next, lead, user) {
	res.render('lead/edit_lead', { formData: req.body, errors: errors, lead: lead, user: user });
}

exports.edit_lead = function(req, res, next) {
	let errors = {};
	return validateEditLead(errors, req).then(errors => {
		if (!isEmpty(errors)) {
			return models.Lead.findOne({
				where: {
					id: req.params.lead_id
				}
			}).then(lead => {
				rerender_edit_Lead(errors, req, res, next, lead, req.user);
			});
		} else {
			return models.Lead.update({
				email: req.body.lead_email
			}, {
				where: {
					id: req.params.lead_id
				}
			}).then(result => {
				res.redirect('/lead/' + req.params.lead_id);
			});
		}
	});
}

exports.delete_lead = function(req, res, next) {
	return models.Lead.destroy({
		where: {
			id: req.params.lead_id
		}
	}).then(result => {
		res.redirect('/leads');
	});
}

exports.delete_lead_json = function(req, res, next) {
	return models.Lead.destroy({
		where: {
			id: req.params.lead_id
		}
	}).then(result => {
		res.send({ msg: 'Success' });
	});
}