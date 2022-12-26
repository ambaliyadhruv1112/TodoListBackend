import Product from '../../models/product.model.js';
import generateSuccessResponse from '../../utilities/generateResponse.js';

const createProduct = async (productDetails) => {
  try {
    const product = await Product.create(productDetails);

    return Promise.resolve(
      generateSuccessResponse('Product create successfully')
    );
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export default createProduct;
