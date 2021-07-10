const express = require('express');

// path join đường dẫn
const path = require('path');

// template engine render conten ra
const handlebars = require('express-handlebars');

// Khai báo những lần thao tác phương thức HTTP
const morgan = require('morgan');

const app = express();
const port = 3000;

const route = require('./routes/index');
//route

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// teaplate engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
        app.set('view engine', 'hbs');
     app.set('views', path.join(__dirname, 'resources', 'views'));

// route init
route(app);

// 127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
