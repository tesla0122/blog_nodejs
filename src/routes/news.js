const express = require('express');
const router = express.Router();

const newscontroller = require('../app/controllers/Newscontroller');

router.get('/show', newscontroller.show);

router.get('/', newscontroller.index);

module.exports = router;
