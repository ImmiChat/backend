const UserModel = require("../models/UserModel");

class UserController {
  static updateUser = async (req, res) => {
    const userId = req.params.id;
    const updatedProfile = await UserModel.updateUserFromDB(req.body, userId);
    return res.status(201).json(updatedProfile);
  };
}

module.exports = UserController;
