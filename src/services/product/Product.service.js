import Product from '../../models/product.model.js';
const product = async (_id) => {
  try {
    const product = await Product.findOne(_id);
    console.log(product);
    return Promise.resolve(product);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export default product;
