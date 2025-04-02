export default function Hello(app) {
    const hello = (req, res) => {
        res.send("Hello World!");
    }
    function home(req, res) {
        res.send("Welcome to the home page!");
    }

    app.get('/hello', hello);
    app.get('/', home);
}

// const express = require('express')
// const app = express()
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {
//   res.send('Welcome to Full Stack Development!')})
// app.listen(4000)
 



