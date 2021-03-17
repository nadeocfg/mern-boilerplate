import express from 'express';
import products from './data/sampleProducts.json';
import { ProductModel } from '../models/productModel';

const app = express();

app.get('/', (request: express.Request, response: express.Response) => {
  response.send('API is running');
});

app.get(
  '/api/products',
  (request: express.Request, response: express.Response) => {
    response.json(products);
  }
);

app.get(
  '/api/products/:id',
  (request: express.Request, response: express.Response) => {
    const product = products.find(
      (product: ProductModel) => product.id === request.params.id
    );

    response.json(product);
  }
);

app.listen(5000, () => console.log('Server running on 5000 port'));
