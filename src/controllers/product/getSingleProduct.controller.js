import product from '../../services/product/index.js';
const getSingleProductController = (req, res, next) => {
  console.log(req.params);
  product
    .product(req.params)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
};

export default getSingleProductController;
