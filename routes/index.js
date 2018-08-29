const express = require('express');
const router = express.Router();
const { data }  = require('../data/data.json');
const { recipes } = data;
let nextPage = 0;


router.get('/', (req, res) => {
    res.render('welcome', {name : req.cookies.username});
});

router.post('/', (req, res) => {
    console.dir(req.body);
    res.cookie('username', req.body.user);
    res.redirect('/');
});



router.get('/recipes', (req, res) => {
    res.render('recipes', {
        name: recipes[0].name,
        instructions:  recipes[0].instructions,
        ingredients: recipes[0].ingredients,
        image: recipes[0].image
    });
});







router.get('/exit', (req, res) => {
    res.clearCookie('username');
    res.redirect('/');
});



module.exports = router;


