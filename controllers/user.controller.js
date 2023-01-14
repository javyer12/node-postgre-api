'use strict'
const users = require("../models/index").users

async function getUser(req, res) {
    let data;
    try {
        data = await users.getUsers(10)
        console.log(data)
    } catch (err) {
        console.log("no getting users" + err.message)
    }
    return res.send(data)
}

const createUser = async (request, response) => {
    let result;
    try {
        // const { name, email } = request.body;
        result = await users.create(request.body)
    } catch (err) {
        console.log('something went wrong' + err)
    }
    return response.send(`user created ${result}`)
}

const createContacts = async (res, req) => {
    let result;
    console.log(req.body)
    try {
        result = await users.createContact(req.body)
        console.log(result)
    } catch (err) {
        console.log(err.message + " no contact ")
    }
    return res.send(`contact was created  ${result}`)
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
    getUser,
    createUser,
    loginUser,
    validateUser,
    createContacts
}