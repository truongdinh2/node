const express = require('express');
const router = express.Router();
const nguoiDayController = require('../app/controller/nguoiDayController')

router.get('/create', nguoiDayController.create)
router.post('/store',nguoiDayController.store)
router.get('/:slug',nguoiDayController.show)
module.exports = router;