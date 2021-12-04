const global = require('child_process').execSync('npm root -g').toString().trim().replace(/\\/g, '\\\\') + '\\\\';
let express = require(global + 'express');
let router = express.Router();

// QuerString => query property on the request object
// locahost:3000/person?name=thomas&age=20
router.get('/person', (req, res) => {
	if(req.query.name) {
		res.send(`You have requested a person ${req.query.name}`);
	} else {
		res.send('You have requested a person');
	}
});


// Params property on the request object
// localhost:3000/person/thomas
router.get('/person/:name', (req, res) => {
	res.send(`You have requested a person ${req.params.name}`);
});


router.get('/error', (req, res) => {
	throw new Error('This is a forced error.');
});

module.exports = router;