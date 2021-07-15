const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/Coursecontroller');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.delete('/:id/delete', courseController.delete);
router.delete('/:id/force', courseController.forceDelete);
router.get('/:id/edit', courseController.edit);
router.patch('/:id/restore', courseController.restore);
router.put('/:id', courseController.update);
router.get('/:slug', courseController.show);

module.exports = router;
