const globals = require('./globals');
const globalLoc = globals.globalLoc;
const Joi = require(globalLoc + 'joi');

const arrayString = ['banana', 'bacon', 'cheese'];
const arrayObjects = [{example: 'example1'}, {example: 'example2'}, {example: 'example3'}];

const userInput = { personalInfo: {
    streetAddresss: '123987987',
    city: 'kljlkajd',
    state: 'fl'
  },
  preferences: arrayObjects
};

const personalInfoSchema = Joi.object({
  streetAddresss: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  state: Joi.string().trim().length(2).required()
});

const preferencesSchema = Joi.array().items(Joi.object({
  example: Joi.string().required()
}));

const schema = Joi.object({
  personalInfo: personalInfoSchema,
  preferences: preferencesSchema
});

let validation = schema.validate(userInput);

if (validation.error)
  console.log(validation.error.message);
else
  console.log(validation);
