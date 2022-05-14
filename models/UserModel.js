const db = require("../db/db");

class UserModel {
  static createUserFromDB = (userInfo) => {
    const { firstName, lastName, email, hashedPassword, language } = userInfo;
    return db("users")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        password: hashedPassword,
      })
      .returning("*");
  };

  static getUserFromDB = (email) => {
    return db.select().from("users").where({ email });
  };

  static getUserFromDBByID = (id) => {
    return db.select().from("users").where({ id });
  };
}

function getCurrentDateJson() {
  return new Date().toJSON();
}

module.exports = UserModel;
