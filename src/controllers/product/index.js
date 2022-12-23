import express from 'express';
import CreateProductController from './createProduct.controller';
import deleteProductController from './deleteProduct.controller';
import getProductController from './getProduct.controller';
import updateProductController from './updateProduct.controller';
const router = express.Router();

router.route('/').get(getProductController).post(CreateProductController);
router
  .route('/:productId')
  .get(getProductController)
  .delete(deleteProductController)
  .put(updateProductController);

export default router;
