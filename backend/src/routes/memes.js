const express = require('express');
const Meme = require('../models/Meme');
const Match = require('../models/Match');

const router = express.Router();

// Get all memes
router.get('/', async (req, res) => {
  try {
    const memes = await Meme.find().limit(50);
    res.json(memes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar memes', error: error.message });
  }
});

// Get meme by ID
router.get('/:id', async (req, res) => {
  try {
    const meme = await Meme.findById(req.params.id);
    if (!meme) {
      return res.status(404).json({ message: 'Meme não encontrado' });
    }
    res.json(meme);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar meme', error: error.message });
  }
});

// Rate meme
router.post('/:id/rate', async (req, res) => {
  try {
    const { action } = req.body; // 'like' or 'pass'
    const userId = req.user?.id; // From auth middleware
    const memeId = req.params.id;

    const match = new Match({
      userId,
      memeId,
      characterId: null, // Will be assigned later
      action
    });
    await match.save();

    if (action === 'like') {
      await Meme.findByIdAndUpdate(memeId, { $inc: { likes: 1 } });
    }

    res.json({ message: `Meme ${action}d!`, match });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar reação', error: error.message });
  }
});

module.exports = router;