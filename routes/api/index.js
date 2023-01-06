const express = require('express');
const router = express.Router();

router.use(require('./employees-routes'));
router.use(require('./locations-routes'));
router.use(require('./positions-routes'));


module.exports = router;