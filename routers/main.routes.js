const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

/* / */

router.get('/', mainController.home)
router.get('/about', mainController.about)
router.get('/contac', mainController.contac)
router.get('/music', mainController.music)



module.exports = router;