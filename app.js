const express = require('express');
const app = express();


const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

const routes = require('./routes');

app.set('view engine', 'pug');

app.use(routes);
app.use('/static', express.static('public'));





app.listen(3000, () => {
    console.log('Hi! Server up and running at port 3000');
});