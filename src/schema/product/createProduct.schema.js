import Joi from 'joi';

const createProductSchema = {
  body: Joi.object().keys({
    chemicalName: Joi.string()
      .required()
      .pattern(/^[a-zA-Z0-9+()]{1,256}$/)
      .min(1)
      .max(256)
      .messages({
        message: 'Chemical formula is a mandatory field, it cannot be empty.',
      }),
    casNumber: Joi.string()
      .required()
      .pattern(/^([0-9]{2,7})([0-9]{2})[0-9]$/)
      .messages({
        message: 'CAS number is a mandatory field, it cannot be empty.',
      }),
    haveBadSmell: Joi.string()
      .valid('YES', 'NO')
      .required('Smell is a mandatory field, it cannot be empty.'),
    sellerName: Joi.string()
      .required()
      .max(50)
      .pattern(/^[\d\w ]+$/)
      .messages({ message: 'name is required' }),
    sellerEmail: Joi.string()
      .email()
      .lowercase()
      .required()
      .messages({ message: 'Please enter a valid email' }),
    sellerAddress: Joi.string().required('name is address'),
  }),
};

export default createProductSchema;
