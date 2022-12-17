const app = require('../app');

/**
 * @openapi
 * /hello:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get('/hello', (req, res) => {
    res.json('Hello World!');
});
