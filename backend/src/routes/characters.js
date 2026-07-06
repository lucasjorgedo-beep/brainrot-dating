const express = require('express');
const CelestialCharacter = require('../models/CelestialCharacter');

const router = express.Router();

// Get all characters
router.get('/', async (req, res) => {
  try {
    const characters = await CelestialCharacter.find();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar personagens', error: error.message });
  }
});

// Get character by ID
router.get('/:id', async (req, res) => {
  try {
    const character = await CelestialCharacter.findById(req.params.id);
    if (!character) {
      return res.status(404).json({ message: 'Personagem não encontrado' });
    }
    res.json(character);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar personagem', error: error.message });
  }
});

// Get characters by rarity
router.get('/rarity/:rarity', async (req, res) => {
  try {
    const characters = await CelestialCharacter.find({ rarity: req.params.rarity });
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar personagens', error: error.message });
  }
});

// Create new character (admin)
router.post('/', async (req, res) => {
  try {
    const { name, rarity, image, bio, personality } = req.body;
    const character = new CelestialCharacter({ name, rarity, image, bio, personality });
    await character.save();
    res.status(201).json(character);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar personagem', error: error.message });
  }
});

module.exports = router;