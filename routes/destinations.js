const express = require('express');
const router = express.Router();
const destsCtrl = require('../controllers/destinations');


router.post('/flights/:id/destinations', destsCtrl.create);


module.exports = router;