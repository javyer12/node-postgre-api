const app = require('../app');
const db = require("../services/user.services")
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
app.post("/create-user", db.createUser)
