import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
const app = express();
mongoose.connect(process.env.MONGODB_URL /*if env variable not exist then run default*/ || 'mongodb://localhost/OnlineBakery' /*connect to mongoDB community*/, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/', (req, res) => {
  res.send("Server is ready");
});
app.use((err, req, res, next) => { /*if duplicate email error will be detect this function will catch from userRouter and send to frontend*/
  res.status(404).send({ message: err.message });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
