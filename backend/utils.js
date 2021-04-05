import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign( //JWT is like a key to encrypt data and generate token
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || 'somethingsecret',
    {
      expiresIn: '30days',
    }
  );
};