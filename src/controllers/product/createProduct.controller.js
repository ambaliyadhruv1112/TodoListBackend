import ProductService from '../../services/product/index.js';

const CreateProductController = (req, res, next) => {
  ProductService.createProduct(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      next(error);
    });
};

export default CreateProductController;
