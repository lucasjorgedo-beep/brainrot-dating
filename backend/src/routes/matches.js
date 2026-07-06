const express = require('express');
const Match = require('../models/Match');

const router = express.Router();

// Get user matches
router.get('/user/:userId', async (req, res) => {
  try {
    const matches = await Match.find({ userId: req.params.userId })
      .populate('characterId')
      .populate('memeId')
      .sort({ matchedAt: -1 });
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar matches', error: error.message });
  }
});

// Get successful matches (likes)
router.get('/user/:userId/successful', async (req, res) => {
  try {
    const matches = await Match.find({ userId: req.params.userId, action: 'like' })
      .populate('characterId')
      .sort({ matchedAt: -1 });
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar matches', error: error.message });
  }
});

module.exports = router;