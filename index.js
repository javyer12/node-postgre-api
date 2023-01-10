const bodyParser = require('body-parser');
const port = 3005
const express = require('express');
const app = express();
const db = require('./services/user.services');
const firebase = require('./controllers/user.controller');
const APIVERSION = "v1";

//Swagger version
// const portSwagger = 3000
// const app = require('./app');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get('/', (req, res) => {
    res.json({
        "Users": "/api/v1/users",
        "GET": "/api/v1/user/:id",
        "POST": "/api/v1/create-user",
        "PUT": "/api/v1/update-user/:id",
        "DELETE": "/api/v1/delete-user/:id",
    })
})
app.get(`/api/${APIVERSION}/users`, db.getUsers);
app.get(`/api/${APIVERSION}/user/:id`, db.getUserById);
app.post(`/api/${APIVERSION}/create-user`, db.createUser);
app.put(`/api/${APIVERSION}/update-user/:id`, db.updateUser);
app.delete(`/api/${APIVERSION}/delete-user/:id`, db.deleteUser);

app.listen(port, () => {
    console.log(`App running on port ${port}. `)
})

// app.listen(portSwagger, () => {
//     console.log(`App running on port ${portSwagger} with Swagger documentation.`)
// })



// firebase

app.post('/firebase/create-user', firebase.createUser);
app.post('/firebase/login', firebase.validateUser);