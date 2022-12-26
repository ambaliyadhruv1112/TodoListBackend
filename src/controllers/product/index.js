import express from 'express';
import CreateProductController from './createProduct.controller.js';
import deleteProductController from './deleteProduct.controller.js';
import getProductController from './getProduct.controller.js';
import updateProductController from './updateProduct.controller.js';
import validateRequest from '../../utilities/validateRequest.js';
import createProductSchema from '../../schema/product/createProduct.schema.js';
const router = express.Router();

router
  .route('/')
  .get(getProductController)
  .post(validateRequest(createProductSchema), CreateProductController);
router
  .route('/:productId')
  .get(getProductController)
  .delete(deleteProductController)
  .put(updateProductController);

export default router;
