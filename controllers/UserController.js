const UserModel = require("../models/UserModel");

class UserController {
  static getAllUsers = async (req, res) => {
    const users = await UserModel.getAllUsersFromDB();
    return res.status(201).json(users);
  };

  static getSingleUser = async (req, res) => {
    const userId = req.params.id;
    const user = await UserModel.getSingleUserFromDB(userId);
    return res.status(201).json(user);
  };

  static updateUser = async (req, res) => {
    const userId = req.params.id;
    const updatedProfile = await UserModel.updateUserFromDB(req.body, userId);
    return res.status(201).json(updatedProfile);
  };
}

module.exports = UserController;
