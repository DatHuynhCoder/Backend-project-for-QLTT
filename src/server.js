const express = require('express')
const path = require('path');

//use env
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000; //port=> hardcode: use env instead
const hostname = process.env.HOST_NAME || 'localhost';

//config template engine: ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


//config static files
app.use(express.static(path.join(__dirname, 'public')));

//route

app.get('/', (req, res) => {
    res.send('Hello World! and hello Dat')
})

app.get('/dat', (req, res) => {
    res.send('Gigachad')
})

app.get('/routetest', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})