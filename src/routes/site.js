const express = require('express');
const router = express.Router();

const sitecontroller = require('../app/controllers/Sitecontroller');

router.get('/search', sitecontroller.search);

router.get('/', sitecontroller.home);

module.exports = router;
