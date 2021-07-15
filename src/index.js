const express = require('express');

// path join đường dẫn
const path = require('path');

// template engine render content ra
const handlebars = require('express-handlebars');

// Khai báo những lần thao tác phương thức HTTP
const morgan = require('morgan');

const methodOverride = require('method-override');
const db = require('./config/db');

// connect to DB
db.connect();

const app = express();
const port = 3000;

const route = require('./routes/index');
//route

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

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
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// route init
route(app);

// 127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
