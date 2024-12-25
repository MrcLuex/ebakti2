const Challenge = require('../models/Challenge');

// Create Challenge
exports.createChallenge = async (req, res) => {
  const { title, description, due_date, challenge_image } = req.body;

  try {
    const newChallenge = await Challenge.create({
      title,
      description,
      due_date,
      challenge_image,
    });

    res.status(201).json({
      message: 'Challenge created successfully',
      challenge: newChallenge,
    });
  } catch (error) {
    console.error("Error during challenge creation:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Get All Challenges
exports.getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.findAll();
    res.status(200).json(challenges);
  } catch (error) {
    console.error("Error fetching challenges:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Update Challenge
exports.updateChallenge = async (req, res) => {
  const { id } = req.params;
  const { title, description, due_date, challenge_image } = req.body;

  try {
    const challenge = await Challenge.findByPk(id);
    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }

    await challenge.update({
      title,
      description,
      due_date,
      challenge_image,
    });

    res.status(200).json({
      message: 'Challenge updated successfully',
      challenge,
    });
  } catch (error) {
    console.error("Error during challenge update:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Delete Challenge
exports.deleteChallenge = async (req, res) => {
  const { id } = req.params;

  try {
    const challenge = await Challenge.findByPk(id);
    if (!challenge) {
      return res.status(404).json({ error: 'Challenge not found' });
    }

    await challenge.destroy();
    res.status(200).json({ message: 'Challenge deleted successfully' });
  } catch (error) {
    console.error("Error during challenge deletion:", error.message);
    res.status(500).json({ error: error.message });
  }
};