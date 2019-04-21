import * as express from 'express';

const ctrl = require('./ctrl');

const router = express.Router();

router.use('/', ctrl.getTest);

module.exports = router;
