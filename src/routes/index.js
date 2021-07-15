const newRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
    // me
    app.use('/me', meRouter);

    // trang-news
    app.use('/news', newRouter);

    // courses
    app.use('/courses', coursesRouter);

    // trang-chu + ( .... site)
    app.use('/', siteRouter);
}

module.exports = route;
