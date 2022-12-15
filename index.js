// const express = require('express');
// const app = express();
const bodyParser = require('body-parser');
const port = 3000
const db = require('./services/user.services');
const app = require('./app');
const APIVERSION = "v1";

// const swaggerUI = require('swagger-ui-express');
// // const swaggerDocument = require('./swagger.json');

// // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// const swaggerJsdoc = require('swagger-jsdoc');
// const swaggerOption = {
//     swaggerDefinition: {
//         info: {
//             version: "1.0.0",
//             title: "Docu api",
//             description: "Api Documentation",
//             contact: {
//                 name: "luisa",
//                 url: "https://www.linkedin.com",
//             },
//             servers: [ "http://localhost:3000" ]
//         }
//     },
//     basePath: "/",
//     apis: [ "./services/user.services.js" ]
// }

// const swaggerDocs = swaggerJsdoc(swaggerOption);
// app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//     extended: true,
// }));

// app.use("/api/users", db.getUsers)
// @swaggerJSDoc
// /api/v1 / { id }:
// get:
// summary: get by id
// description: "Api Documentation",
//     produces:
// - application / json
// parameters:
// - in path
// name: id
// description: id of users
// response :
//200:
// description: user by id
//schema:
// type: json

// app.get("/users", db.getUsers);
/**
 * @openapi
 * /api/v1 / { id }:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get('/users', db.getUsers);
// app.get('/', (req, res) => {
//     res.json({
//         "GET": "/api/v1/users",
//         "GET": "/api/v1/users/:id",
//         "POST": " /api/v1/users",
//         "PUT": "/api/v1/users/:id",
//         "DELETE": "/api/v1/users/:id",
//     })
// })
// app.get(`/api/${APIVERSION}/users`, db.getUsers);
// app.get(`/api/${APIVERSION}/users/:id`, db.getUserById);
// app.post(`/api/${APIVERSION}/create-user`, db.createUser);
// app.put(`/api/${APIVERSION}/update-user/:id`, db.updateUser);
// app.delete(`/api/${APIVERSION}/delete-user/:id`, db.deleteUser);

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})