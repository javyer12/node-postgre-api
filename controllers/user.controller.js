'use strict'
const users = require("../models/index").users

const createUser = async (request, response) => {
    let result;
    try {
        // const { name, email } = request.body;
        result = await users.create(request.body)
    } catch (err) {
        console.log('something went wrong')
    }
    return response.send(`user created ${result}`)
}

const validateUser = async (req, res) => {
    let result;
    try {
        result = await users.validateUser(req.body)
    } catch (err) {
        console.log(err)
    }
    return res.send(`user correct ${result}`)
}
const loginUser = async (req, res) => {

}
module.exports = {
    createUser: createUser,
    loginUser: loginUser,
    validateUser: validateUser,
}