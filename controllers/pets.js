const Pet = require('../models/pet.js');
const express = require('express');
const router = express.Router();





// POST /pets
router.post('/', async (req, res) => {
    try {
        const createdPet = await Pet.create(req.body);
        res.status(201).json(createdPet);
    } catch (error) {
        res.status(500).json({ err: error.message });
    };
});


// GET /pets
router.get('/', async (req, res) => {
    try {
        const foundPets = await Pet.find({});
        res.status(200).json(foundPets);
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
});


// GET /pets/:petId
router.get('/:petId', async (req, res) => {
    try {
        const foundPet = await Pet.findById(req.params.petId);
        if (!foundPet) {
            res.status(404);
            throw new Error('Pet not found.');
        };
        res.status(200).json(foundPet);
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ err: error.message });
        } else {
            res.status(500).json({ err: error.message });
        };
    }
});


// PUT /pets/:petId
router.put('/:petId', async (req, res) => {
    try {
        const updatedPet = await Pet.findByIdAndUpdate(req.params.petId, req.body, { new: true });
        if (!updatedPet) {
            res.status(404);
            throw new Error('Pet not found.');
        };
        res.status(200).json(updatedPet);
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ err: error.message });
        } else {
            res.status(500).json({ err: error.message });
        };
    }

});


// DELETE /pets/:petId
router.delete('/:petId', async (req, res) => {
    try {
        const deletedPet = await Pet.findByIdAndDelete(req.params.petId);
        if (!deletedPet) {
            res.status(404);
            throw new Error('Pet not found.');
        };
        res.status(200).json({ action: 'delete', deletedPet });
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ err: error.message });
        } else {
            res.status(500).json({ err: error.message });
        };
    }
});



module.exports = router;