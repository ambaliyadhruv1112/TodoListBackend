import Product from '../../models/product.model';
import generateSuccessResponse from '../../utilities/generateResponse';

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
