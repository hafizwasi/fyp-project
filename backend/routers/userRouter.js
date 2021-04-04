import express from 'express';
import expressAsyncHandler from 'express-async-handler'; /*is for get an error message in browser when email will duplicate*/
import data from '../data.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
     await User.remove({}); /*it'll remove users before creating new users*/
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

export default userRouter;