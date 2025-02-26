const Joi = require('joi');


const id = Joi.string().uuid();
const name = Joi.string().max(100);
const price = Joi.number().min(1);
const image = Joi.string().uri();
const type = Joi.string().max(100);
const tags = Joi.array().items(Joi.string().max(50));
const createdAt = Joi.date().timestamp('unix');
const updatedAt = Joi.date().timestamp('unix');



const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  type: type.required(),
  tags: tags,
  createdAt: createdAt,
  updatedAt: updatedAt
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  type: type,
  tags: tags,
  createdAt: createdAt,
  updatedAt: updatedAt
});

const getProductSchema = Joi.object({
  id: id.required()
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
