import express from 'express';
import User from '../models/user.model.js';

const router = express.Router();

router.get('/all', (req, res) => {

});

router.get('/login', (req, res) => {
    res.render('pages/login', {title: 'Login'});
});

router.get('/register', (req, res) => {
    res.render('pages/register', {title: 'Register'});
});

router.post('/login', (req, res) => {

});

router.post('/register', (req, res) => {

});

export default router;