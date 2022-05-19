class UserController {

    static updateUser = async (req,res) => {
        console.log(req.body)
        return res.status(201).json('Hello')
    }
}

module.exports = UserController;