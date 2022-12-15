const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000
const db = require('./services/user.services');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get('/', (req, res) => {
    res.json({
        info: 'node.js, express and postgres api'
    })
})
app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/create-user', db.createUser);
app.put('/update-users/:id', db.updateUser);
app.delete('/delete-user/:id', db.deleteUser);

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})