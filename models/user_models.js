'use strict'
const bcrypt = require('bcrypt')

class Users {
    constructor(db) {
        this.db = db
        this.ref = this.db.ref('/')
        this.collection = this.ref.child('users')
    }
    async create(data) {
        data.password = await this.constructor.encrypt(data.password);

        const newUser = this.collection.push()
        newUser.set(data)
        return newUser.key
    }

    async createContact(data) {
        const contactInfo = this.collection.push()
        contactInfo.set(data)

        return contactInfo.key
    }

    async validateUser(data) {
        const userQuery = await this.collection.orderByChild('email').equalTo(data.email).once('value')
        const userFound = userQuery.val()
        if (userFound) {
            const userId = Object.keys(userFound)[ 0 ]

            const passwordRight = await bcrypt.compare(data.password, userFound[ userId ].password)
            const result = (passwordRight) ? userFound[ userId ] : false
            const finalResult = JSON.stringify(result)

            return `worked ${finalResult}`
        }
        return false
    }

    async getUsers(amount) {
        const query = await this.collection
            .limitToLast(amount)
            .once('value');

        const data = query.val();
        return data;
    }


    static async encrypt(password) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        return hashedPassword;
    }
}

module.exports = Users 