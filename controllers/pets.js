const Pet = require('../models/pet.js');
const express = require('express');
const router = express.Router();





// POST /pets
router.post('/', async (req, res) => {
    res.json({message: 'create a pet route'});
});


// GET /pets
router.get('/', async (req, res) => {
    res.json({message: 'get all pets route'});
});


// GET /pets/:petId
router.get('/:petId', async (req, res) => {
    res.json({message: 'get 1 pet route'});
});


// PUT /pets/:petId
router.put('/:petId', async (req, res) => {
    res.json({message: 'update pet route'});
});


// DELETE /pets/:petId
router.delete('/:petId', async (req, res) => {
    res.json({message: 'delete pet route'});
});



module.exports = router;