const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! and hello Dat')
})

router.get('/dat', (req, res) => {
    res.send('Gigachad')
})

router.get('/routetest', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;