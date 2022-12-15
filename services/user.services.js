const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'javy',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5430
})
// get users from postgres
const getUsers = (request, response) => {
    try {
        pool.query('SELECT * FROM users ORDER BY id ASC', (err, results) => {
            if (err) {
                console.error(`Something went worng, ${err.message}`)
            }
            response.status(200).send(results.rows)
        })
    } catch (err) {
        throw new Error(`Something faild trying to connct to DB. ${err.message}`)
    }
}

// Get a single user by id
const getUserById = (request, response) => {
    try {
        const id = parseInt(request.params.id)
        pool.query('SELECT * FROM users WHERE id = $1', [ id ], (err, results) => {
            if (err) {
                throw new Error(`Something went worng. ${err.message}`)
            }
            response.status(200).json(results.rows)
        })
    } catch (err) {
        throw new Error(`Something faild trying to connct to DB. ${err.message}`)
    }
}

// post a new user
const createUser = (request, response) => {
    const { name, email } = request.body;
    try {
        if (name === null | email === null) {
            return new Error("name or email is null")
        }
        pool.query('INSERT INTO users (name, email) VALUES ($1,$2) RETURNING *', [ name, email ], (err, results) => {
            if (err) {
                throw new Error(`Something went worng. ${err.message}`)
            }
            response.status(200).send(`User added with ID: ${results.rows[ 0 ].id}`)
        })
    } catch (err) {
        throw new Error(`Something faild trying to connct to DB. ${err.message}`)
    }
}

//update a user
const updateUser = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, email } = request.body;
    if (name === " " | email === " ") {
        return new Error("name or email is null")
    }
    try {
        pool.query(' UPDATE users SET name = $1, email = $2 WHERE id = $3',
            [ name, email, id ], (err, results) => {
                if (err) {
                    throw new Error(`Something went worng. ${err.message}`)
                }
                response.status(200).send(`User updated with ID: ${id}`);
            })
    } catch (err) {
        throw new Error(`Something faild trying to connct to DB. ${err.message}`)
    }
}

const deleteUser = (request, response) => {
    try {
        const id = parseInt(request.params.id);
        pool.query('DELETE FROM users WHERE id = $1', [ id ], (err, results) => {
            if (err) {
                throw new Error(`Something went worng. ${err.message}`)
            }
            response.status(200).send(`User deleted with ID: ${id}`)
        })
    } catch (err) {
        throw new Error(`Something faild trying to connct to DB. ${err.message}`)
    }
}
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}