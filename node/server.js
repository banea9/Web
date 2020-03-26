////////////////NODEJS way of creating a server /////////////////////

// const http = require('http');

// const server = http.createServer((req, res) => {
//     const user = {
//         name: 'John',
//         hobby: 'scating'
//     }
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(user))
// })

// server.listen(3001)

////////////////////////////////////////////////////////////////////
                // EXPRESS JS way of creating a server
////////////////////////////////////////////////////////////////////

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('<h1>sadada</h1>');
    next();
}) 

app.get('/', (req, res) => {
    res.send('getting root')
})
app.get('/profile', (req, res) => {
    res.send('getting profile')
})
app.post('/profile', (req, res) => {
    console.log(req.body)
    res.send('Success')
})
app.listen(3000)
