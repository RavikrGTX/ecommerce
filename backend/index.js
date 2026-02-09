import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import errorHandler from './middleware/errorMiddleware.js';
import productRoutes from './routes/products.js';
// import orderRoutes from './routes/orders.js';
import authRoutes from './routes/authRoutes.js'
import prisma from "./utils/prisma.js";
import categoryRoutes from "./routes/categoryRoutes.js"
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
 

app.use('/api/products', productRoutes);

app.use('/api/auth', authRoutes );
app.use('/api/categories',categoryRoutes );
app.use('/api/cart',cartRoutes);
app.use("/api/orders", orderRoutes);



app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/db-check', async (req, res) => {
  const result = await prisma.$queryRaw`SELECT current_database(), current_schema()`;
  res.json(result);
});
