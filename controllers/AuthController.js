const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require('../models/UserModel');

class AuthController {
    static validateRegistation = async (req,res) => {
        const {firstName, lastName, email, password, countryOfOrigin, language} = req.body;
        const hashedPassword = bcrypt.hashSync(password, 8); 
        try {
            const userInfo = {firstName, lastName, email, hashedPassword, countryOfOrigin, language};
            const newUser = await UserModel.createUserFromDB(userInfo);
            return res.status(201).json(newUser);

        } catch (err) {
            return res.status(404).json(err);
        }
    }
    static validateLogin = async (req,res) => {

    }
    static signOut = async (req,res) => {
        
    }

}