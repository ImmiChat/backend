const db = require("../db/db");

class UserModel {
  static createUserFromDb = userInfo => {
    const {firstName, lastName, email, hashedPassword, countryOfOrigin, language} = userInfo;
    return db("users")
      .insert({firstName, lastName, email, hashedPassword, countryOfOrigin, language})
      .returning("*");
  };



}

function getCurrentDateJson() {
  return new Date().toJSON();
}

module.exports = UserModel;
