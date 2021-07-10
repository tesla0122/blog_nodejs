const express = require('express');
const router = express.Router();

const newscontroller = require('../app/controllers/Newscontroller');

router.use('/show', newscontroller.show);

router.use('/', newscontroller.index);

module.exports = router;
