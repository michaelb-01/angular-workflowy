const express = require('express');
const router = express.Router();

const Item = require('../models/item.js');

// get all items
router.get('/', (req, res) => {
	console.log('routes/items.js - get all items')
    Item.find({}, (err, items) => {
        if (err)
            console.log(err);
        else
        	console.log('return success');
        	console.log(items);
            res.json(items);
    });
});

module.exports = router;
