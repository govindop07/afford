import express from 'express'
import cors from 'cors';
import userRouter from './routes/user.routes.js';
import postRouter from './routes/post.routes.js';
import dotenv from 'dotenv'
dotenv.config();


const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.listen(5000, (req, res)=>{
  console.log("server is running on 5000")
})