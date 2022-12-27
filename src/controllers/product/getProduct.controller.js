import product from '../../services/product/index.js';
const getProductController = (req, res, next) => {
  product
    .productList()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
};

export default getProductController;
