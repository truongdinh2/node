const express = require('express');
const router = express.Router();
const newController = require('../app/controller/NewsController')

// router.use('/truong',newController.show)
router.get('/:slug',newController.show)
router.get('/',newController.index)
module.exports = router;