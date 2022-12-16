const app = require('../app');

/**
 * @openapi
 * /delete-hello:
 *   delete:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       404:
 *         description: Returns a mysterious string.
 */
app.delete('/delete', (req, res) => {
    res.send('Delete World!');
});
