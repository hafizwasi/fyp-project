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

export const isAuth = (req, res, next) => { //authenticate request
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(
      token,
      process.env.JWT_SECRET || 'somethingsecret',
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Invalid Token' });
        } else {
          req.user = decode;
          next();
        }
      }
    );
   
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};
export const isAdmin = (req, res, next) => { //this function is to authenicate only admin users
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: 'Invalid Admin Token' });
  }
};