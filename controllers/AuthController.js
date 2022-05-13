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
    return res.status(201).json(`Successfully Registered!`);
  };
  static validateLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.getUserFromDB(email);
    if (user.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }
    const validation = await bcrypt.compare(password, user[0].password);
    if (!validation) {
      return res.status(404).json({ message: "Incorrect Password" });
    }
    const token = jwt.sign(user[0], "Your_Secret_Key");
    return res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({ message: "Logged in successfully 😊 👌", token, user: user[0] });
  };
  static logOut = async (req, res) => {
    return res.clearCookie("access_token").status(200).json("Signed out");
  };

  static isAuthenticated = async (req, res) => {
    const token = req.cookies.access_token;
    jwt.verify(token, "Your_Secret_Key", (err, decoded) => {
      if (err) {
        return res.status(401).json(`Not authenticated`);
      } else {
        return res.status(201).json(decoded);
    });
  };
}

module.exports = AuthController;
