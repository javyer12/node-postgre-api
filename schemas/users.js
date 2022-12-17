
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'javy',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5430
})
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
getUserById();
