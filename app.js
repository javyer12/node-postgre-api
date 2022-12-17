const express = require('express');
const app = express();
const swaggerUI = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerOption = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Docu api",
            description: "Api Documentation",
            contact: {
                name: "frank",
                url: "https://www.linkedin.com",
            },
            servers: [ "http://localhost:3005/api/v1" ]
        }
    },
    basePath: "/users",
    apis: [ "./routes/getuserbyid.js", "./routes/index.js", "index.js", "./routes/createUser.js" ]
}

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = app;