const express = require('express');
const router = express.Router();

const { browse, read, add, remove, edit } = require('../controllers/videoGamesControllers');

router.get('/', browse);
router.get('/:id', read);
router.post('/', add);
router.delete('/:id', remove);
router.put('/:id', edit);

module.exports = router;