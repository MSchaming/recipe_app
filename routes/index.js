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



// router.get('/recipes', (req, res) => {
//     res.render('recipes', {
//         name: recipes[0].name,
//         instructions:  recipes[0].instructions,
//         ingredients: recipes[0].ingredients,
//         image: recipes[0].image
//     });
// });

router.get('/recipes/:page', (req, res) => {
    res.render('recipes', {
        name: recipes[req.params.page].name,
        instructions:  recipes[req.params.page].instructions,
        ingredients: recipes[req.params.page].ingredients,
        image: recipes[req.params.page].image
    });
});


router.post('/recipes/:page', (req, res) => {
    if(nextPage < (recipes.length - 1)) {
        nextPage += 1; 
        res.redirect(`/recipes/${nextPage}`);
    } else {
        nextPage = 0;
        res.redirect('/');
    }
});





router.get('/exit', (req, res) => {
    res.clearCookie('username');
    res.redirect('/');
});



module.exports = router;


