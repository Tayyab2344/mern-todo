import express from 'express';
import { connectDB } from './config/db.js';
import cors from 'cors';
import Route from './routes/todoroutes.route.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", Route);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on ${port}`);
});
