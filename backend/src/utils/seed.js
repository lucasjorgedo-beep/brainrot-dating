const mongoose = require('mongoose');
const Meme = require('../models/Meme');
const CelestialCharacter = require('../models/CelestialCharacter');
require('dotenv').config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB conectado');

    // Clear existing data
    await Meme.deleteMany({});
    await CelestialCharacter.deleteMany({});

    // Seed memes
    const memes = [
      { title: 'Sigma Male Grindset', imageUrl: 'https://via.placeholder.com/400x500?text=Sigma', brainrotLevel: 9, category: 'motivation' },
      { title: 'Skibidi Toilet', imageUrl: 'https://via.placeholder.com/400x500?text=Skibidi', brainrotLevel: 10, category: 'absurd' },
      { title: 'Gyatt What', imageUrl: 'https://via.placeholder.com/400x500?text=Gyatt', brainrotLevel: 8, category: 'slang' },
      { title: 'Rizz Energy', imageUrl: 'https://via.placeholder.com/400x500?text=Rizz', brainrotLevel: 7, category: 'personality' },
      { title: 'No Cap Fr Fr', imageUrl: 'https://via.placeholder.com/400x500?text=No+Cap', brainrotLevel: 9, category: 'slang' }
    ];
    await Meme.insertMany(memes);
    console.log('✅ Memes seedados');

    // Seed celestial characters
    const characters = [
      { name: 'Aurora ✨', rarity: 'Celestial', bio: 'Celestial being of pure light', personality: 'Mysterious and ethereal' },
      { name: 'Lyra 🌟', rarity: 'Epic', bio: 'Star-born character', personality: 'Adventurous' },
      { name: 'Nova 💫', rarity: 'Rare', bio: 'Shining brightly', personality: 'Optimistic' },
      { name: 'Stella ✨', rarity: 'Common', bio: 'Common star', personality: 'Friendly' }
    ];
    await CelestialCharacter.insertMany(characters);
    console.log('✅ Personagens seedados');

    console.log('🌟 Database seedada com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro ao seear database:', error);
    process.exit(1);
  }
};

seedDatabase();