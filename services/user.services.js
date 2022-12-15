const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'javy',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432
})
// get users from postgres
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (err, results) => {
        if (err) {
            console.error(`Something went worng, ${err.message}`)
        }
        response.status(200).send(results.rows)
    })
}

// Get a single user by id
const getUserById = (response, request) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM users WHERE id = $1', [ id ], (err, results) => {
        if (err) {
            throw new Error(`Something went worng. ${err.message}`)
        }
        response.status(200).json(results.rows)
    })
}

// post a new user
const createUser = (response, request) => {
    const { name, email } = request.body;
    pool.query('INSERT INTO users (name, email) VALUES ($1,$2) RETURNING *', [ name, email ], (err, results) => {
        if (err) {
            throw new Error(`Something went worng. ${err.message}`)
        }
        response.status(200).send(`User added with ID: ${results.rows[ 0 ].id}`)
    })
}

//update a user
const updateUser = (response, request) => {
    const id = parseInt(request.params.id);
    const { name, email } = request.body;
    pool.query(' UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [ name, email, id ], (err, results) => {
            if (err) {
                throw new Error(`Something went worng. ${err.message}`)
            }
            response.status(200).send(`User updated with ID: ${id}`);
        })
}

const deleteUser = (response, request) => {
    const id = parseInt(request.params.id);
    pool.query('DELETE FROM users WHERE id = $1', [ id ], (err, results) => {
        if (err) {
            throw new Error(`Something went worng. ${err.message}`)
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}
module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}