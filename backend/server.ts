import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import productRoutes from './routes/productRoutes';

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();

const app = express();

app.get('/', (request: express.Request, response: express.Response) => {
  response.send('API is running');
});

app.use('/api/products', productRoutes);

app.listen(port, () =>
  console.log(
    colors.cyan.underline(
      `Server running in ${process.env.NODE_ENV} mode, on port ${port}`
    )
  )
);
