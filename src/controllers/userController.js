const User = require("../models/User");
const config = require("../utils/config");
const { sign } = require("jsonwebtoken");

async function register(req, res, next) {
  const { userName, firstName, lastName, email, password } = req.body;
  const user = new User({
    userName,
    firstName,
    lastName,
    email,
    password
  });

  user.password = await user.hashPassword(user.password);
  await user.save();

  const token = sign({ id: user._id }, config.secret, {
    expiresIn: 60 * 60 * 24
  });

  res.status(200).json({
    auth: true,
    token
  });
}

async function login(req, res, next) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      auth: false,
      token: null,
      message: "The email doesn't exists"
    });
  }

  const validPassword = await user.checkPassword(password);

  if (!validPassword) {
    return res.status(401).json({
      auth: false,
      token: null
    });
  }

  const token = sign({ id: user._id }, config.secret, {
    expiresIn: 60 * 60 * 24
  });

  return res.status(200).json({
    auth: true,
    token
  });
}

module.exports = {
  login,
  register
};
