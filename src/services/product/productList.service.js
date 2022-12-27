import Product from '../../models/product.model.js';

const productList = async () => {
  try {
    const product = await Product.find().lean().exec();
    return Promise.resolve(product);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export default productList;
