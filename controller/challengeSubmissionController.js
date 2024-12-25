const ChallengeSubmission = require('../models/ChallengeSubmission');

// Create Challenge Submission
exports.createChallengeSubmission = async (req, res) => {
  const { challenge_id, user_id, submission_file, status } = req.body;

  try {
    const newSubmission = await ChallengeSubmission.create({
      challenge_id,
      user_id,
      submission_file,
      status,
    });

    res.status(201).json({
      message: 'Challenge submission created successfully',
      submission: newSubmission,
    });
  } catch (error) {
    console.error("Error during challenge submission creation:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Get All Challenge Submissions
exports.getChallengeSubmissions = async (req, res) => {
  try {
    const submissions = await ChallengeSubmission.findAll();
    res.status(200).json(submissions);
  } catch (error) {
    console.error("Error fetching challenge submissions:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Update Challenge Submission
exports.updateChallengeSubmission = async (req, res) => {
  const { id } = req.params;
  const { challenge_id, user_id, submission_file, status } = req.body;

  try {
    const submission = await ChallengeSubmission.findByPk(id);
    if (!submission) {
      return res.status(404).json({ error: 'Challenge submission not found' });
    }

    await submission.update({
      challenge_id,
      user_id,
      submission_file,
      status,
    });

    res.status(200).json({
      message: 'Challenge submission updated successfully',
      submission,
    });
  } catch (error) {
    console.error("Error during challenge submission update:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Delete Challenge Submission
exports.deleteChallengeSubmission = async (req, res) => {
  const { id } = req.params;

  try {
    const submission = await ChallengeSubmission.findByPk(id);
    if (!submission) {
      return res.status(404).json({ error: 'Challenge submission not found' });
    }

    await submission.destroy();
    res.status(200).json({ message: 'Challenge submission deleted successfully' });
  } catch (error) {
    console.error("Error during challenge submission deletion:", error.message);
    res.status(500).json({ error: error.message });
  }
};