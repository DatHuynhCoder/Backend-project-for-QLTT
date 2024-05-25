require('dotenv').config();
const express = require('express')
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web.js');

//use env

const app = express();
const port = process.env.PORT || 3000; //port=> hardcode: use env instead
const hostname = process.env.HOST_NAME || 'localhost';

//config template engine: ejs
configViewEngine(app);

//router
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})