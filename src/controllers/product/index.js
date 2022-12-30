import express from 'express';
import CreateProductController from './createProduct.controller.js';
import deleteProductController from './deleteProduct.controller.js';
import getProductController from './getProduct.controller.js';
import updateProductController from './updateProduct.controller.js';
import validateRequest from '../../utilities/validateRequest.js';
import createProductSchema from '../../schema/product/createProduct.schema.js';
import getSingleProductController from './getSingleProduct.controller.js';
const router = express.Router();

router
  .route('/')
  .get(getProductController)
  .post(validateRequest(createProductSchema), CreateProductController);
router
  .route('/:_id')
  .get(getSingleProductController)
  .delete(deleteProductController)
  .put(updateProductController);

export default router;
