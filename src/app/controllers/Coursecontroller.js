const Course = require('../models/Course.js');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((courses) => {
                res.render('courses/show', {
                    course: mongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => {
                res.redirect('/me/stored/courses');
            })
            .catch((error) => {});
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((courses) =>
                res.render('courses/edit', {
                    course: mongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    // [PUT] /courses/:id/
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE] /courses/:id/delete
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /courses/:id/force
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next); // LỖI LĂm lỖI LỐN
    }
}

module.exports = new CourseController();
