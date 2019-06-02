'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario-controller');
const auth = require('../middlewares/authentication');

let _crtl = new controller();

router.post('/autenticar', _crtl.autenticar);
router.post('/register', _crtl.post);

router.get('/',auth, _crtl.get);
router.get('/:id', _crtl.getById);
router.post('/', auth, _crtl.post);
router.put('/:id', auth, _crtl.put);
router.delete('/:id', auth, _crtl.delete);

module.exports = router;