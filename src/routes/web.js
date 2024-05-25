const express = require('express');
const { getHomepage, getGigachad, getTheZucc } = require('../controllers/homeController');
const router = express.Router();

// router.Method('/routes',handler)

router.get('/', getHomepage);


router.get('/dat', getGigachad);

router.get('/routetest', getTheZucc);

module.exports = router;