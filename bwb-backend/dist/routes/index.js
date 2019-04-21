"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ctrl = require('./ctrl');
var router = express.Router();
router.use('/', ctrl.getTest);
module.exports = router;
//# sourceMappingURL=index.js.map