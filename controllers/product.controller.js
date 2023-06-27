import productService from "../services/product.service.js";

const getAllController = async (req, res, next) => {
  try {
    const query = req?.query?.query

    if(query) {
      return res.json(await productService.getByQuery(query));
    }

    res.json(await productService.getAll());
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
}

const productController = {
  getAllController
}

export default productController;