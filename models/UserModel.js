const db = require("../db/db");

class UserModel {
  static getAllUsersFromDB = () => {
    return db
      .select(
        "id",
        "first_name",
        "last_name",
        "email",
        "language",
        "country_of_origin"
      )
      .from("users");
  };

  static getSingleUserFromDB = (userId) => {
    return db
      .select(
        "id",
        "first_name",
        "last_name",
        "email",
        "language",
        "country_of_origin"
      )
      .from("users")
      .where({ id: userId });
  };

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

  static updateUserFromDB = (
    { first_name, last_name, language, country_of_origin, bio },
    id
  ) => {
    return db("users")
      .update({
        first_name,
        last_name,
        language,
        country_of_origin,
        bio,
      })
      .where({ id })
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
