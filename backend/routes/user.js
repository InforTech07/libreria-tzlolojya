const express = require('express');
const ctrl = require('../controllers/user.ctrl.js');
const router = express.Router();


router.post('/',ctrl.signIn);
router.post('/newuser',ctrl.newUser);

module.exports=router;