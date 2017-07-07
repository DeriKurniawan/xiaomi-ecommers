const Item = require('../controllers/item');
const express = require('express');
const router = express.Router();

router.get('/', Item.showAll);
router.post('/', Item.addItem);
router.get('/:id', Item.getItem);
router.get('/search/:name', Item.getItemBySearch);
router.get('/categories/:category', Item.getItemByCategory);

module.exports = router;
