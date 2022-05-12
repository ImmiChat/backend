const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

class AuthController {
  static validateRegistration = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    // Checks if User already exists
    const user = await UserModel.getUserFromDB(email);
    if (user.length > 0) return res.status(401).json("User exists");
    // Hash the password and create user using model
    const hashedPassword = bcrypt.hashSync(password, 8);
    const userInfo = {
      firstName,
      lastName,
      email,
      hashedPassword,
    };
    const newUser = await UserModel.createUserFromDB(userInfo);
    return res.status(201).json(newUser);
  };
  static validateLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.getUserFromDB(email);
    if (user.length === 0) {
      return res.status(404).json("user not found");
    }
    const validation = await bcrypt.compare(password, user[0].password);
    if (!validation) {
      return res.status(404).json("Incorrect Password");
    }
    return res.status(201).json(user);
  };
  static logOut = async (req, res) => {};
}

module.exports = AuthController;
