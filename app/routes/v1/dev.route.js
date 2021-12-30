const devController = require('../../controllers/dev.controller');
const router = require('express').Router();

router.get('/version', devController.version);

module.exports = router;