import productModel from '../../models/product.model.js';
import generateSuccessResponse from '../../utilities/generateResponse.js';

const deleteProduct = async (productId) => {
  try {
    const product = await productModel.findByIdAndDelete({ _id: productId });

    if (!product) {
      return Promise.reject('Product not found.');
    }
    return Promise.resolve(
      generateSuccessResponse('Product delete successfully')
    );
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export default deleteProduct;
