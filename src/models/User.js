const { Schema, model } = require("mongoose");
const { genSalt, hash, compare } = require("bcryptjs");

const userSchema = new Schema({
  userName: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

userSchema.methods.hashPassword = async password => {
  const salt = await genSalt(10);
  return hash(password, salt);
};

userSchema.methods.checkPassword = async function(password) {
  return await compare(password, this.password);
};

module.exports = model("User", userSchema);
