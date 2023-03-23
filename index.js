const bodyParser = require("body-parser");
const port = 3005;
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

// routes with expressRoute
const userRouter = require("./routes/user.route");

// const db = require('./services/user.services');
// const APIVERSION = "v1";
// ////////////////////////////////////////////

//Swagger version
const portSwagger = 3000;
// const newApp = require('./app');

// new version of swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3005",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
};
// milddlewares
app.use(express.json());
app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);

app.use("/api", userRouter);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    Users: "/api/v1/users",
    GET: "/api/v1/user/:id",
    POST: "/api/v1/create-user",
    PUT: "/api/v1/update-user/:id",
    DELETE: "/api/v1/delete-user/:id",
  });
});
// app.get(`/api/${APIVERSION}/users`, db.getUsers);
// app.get(`/api/${APIVERSION}/user/:id`, db.getUserById);
// app.post(`/api/${APIVERSION}/create-user`, db.createUser);
// app.put(`/api/${APIVERSION}/update-user/:id`, db.updateUser);
// app.delete(`/api/${APIVERSION}/delete-user/:id`, db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}. `);
});

app.listen(portSwagger, () => {
  console.log(`App running on port ${portSwagger} with Swagger documentation.`);
});

// manejo cuando falla la validacion
// controlar el error 404
// controlar el error 404 de inert

// modelos en singular, controladores en plural
