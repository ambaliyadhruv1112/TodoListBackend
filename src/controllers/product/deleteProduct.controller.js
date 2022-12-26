import product from '../../services/product/index.js';
const deleteProductController = (req, res, next) => {
  product
    .deleteProduct(req.params.productId)
    .then(() => {
      res.status(204).json();
    })
    .catch((error) => {
      console.log(erro);
      next(error);
    });
};

export default deleteProductController;
