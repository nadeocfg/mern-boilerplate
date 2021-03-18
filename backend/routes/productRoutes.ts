import express from 'express';
import Product from '../schemas/productSchema';

const router = express.Router();

// @desc   Fetch all products
// @route  GET /api/products
// @access Public
router.get(
  '/',
  async (request: express.Request, response: express.Response) => {
    try {
      const products = await Product.find({});
      response.json(products);
    } catch (error) {
      response.status(404).json({
        message: error.message,
      });
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  }
);

// @desc   Fetch single products
// @route  GET /api/products/:id
// @access Public
router.get(
  '/:id',
  async (request: express.Request, response: express.Response) => {
    try {
      const product = await Product.findById(request.params.id);

      if (product) {
        return response.json(product);
      }

      response.status(404).json({
        message: `Product with id ${request.params.id} not found`,
      });
    } catch (error) {
      response.status(404).json({
        message: error.message,
      });
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  }
);

export default router;
