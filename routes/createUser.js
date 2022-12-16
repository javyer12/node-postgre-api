const app = require('../app');
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'javy',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5430
})
/**
 * @swagger
 * /create-user:
 *   post:
 *        summary: create user
 *        description: Request to create a user
 *        produces:
 *              -  application/json
 *        parameters:
 *              -   in: body
 *                  name: user
 *                  description: Creating a user
 *        responses:
 *         200:
 *               description:  returning nothing
 *               schema:
 *               type: json
 */
app.post("/", (request, response) => {
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
})
