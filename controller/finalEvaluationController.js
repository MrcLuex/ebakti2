const { sequelize } = require('../config/db'); // Import sequelize for raw queries
const FinalEvaluation = require('../models/FinalEvaluation');
const Certificate = require('../models/Certificate');

// Calculate and populate final evaluation scores
exports.calculateFinalEvaluations = async (req, res) => {
  try {
    // Calculate scores and update final_evaluation table
    const query = `
      INSERT INTO final_evaluation (user_id, attendance_score, challenge_score, task_score, total_score, status)
      SELECT 
        u.user_id,
        (SUM(CASE 
          WHEN a.status = 'hadir' THEN 10
          WHEN a.status = 'izin' THEN 5
          ELSE 0
        END) / COUNT(DISTINCT a.attendance_id)) AS attendance_score,
        COALESCE(AVG(cs.score), 0) AS challenge_score,
        COALESCE(AVG(ts.score), 0) AS task_score,
        LEAST(
          100,  -- Maximum score limit
          ((SUM(CASE 
            WHEN a.status = 'hadir' THEN 10
            WHEN a.status = 'izin' THEN 5
            ELSE 0
          END) / COUNT(DISTINCT a.attendance_id)) + 
          COALESCE(AVG(cs.score), 0) + 
          COALESCE(AVG(ts.score), 0))
        ) AS total_score,
        CASE 
          WHEN LEAST(
            100, 
            ((SUM(CASE 
              WHEN a.status = 'hadir' THEN 10
              WHEN a.status = 'izin' THEN 5
              ELSE 0
            END) / COUNT(DISTINCT a.attendance_id)) + 
            COALESCE(AVG(cs.score), 0) + 
            COALESCE(AVG(ts.score), 0))
          ) >= 75 THEN 'pass'
          ELSE 'fail'
        END AS status
      FROM user u
      LEFT JOIN attendance a ON u.user_id = a.user_id
      LEFT JOIN challenge_submission cs ON u.user_id = cs.user_id
      LEFT JOIN task_submission ts ON u.user_id = ts.user_id
      GROUP BY u.user_id
      ON DUPLICATE KEY UPDATE 
        attendance_score = VALUES(attendance_score),
        challenge_score = VALUES(challenge_score),
        task_score = VALUES(task_score),
        total_score = VALUES(total_score),
        status = VALUES(status);
    `;

    await sequelize.query(query);

    // Generate certificates for users who passed
    const passedUsers = await FinalEvaluation.findAll({
      where: { status: 'pass' }
    });

    for (const evaluation of passedUsers) {
      // Check if the user has already received a certificate
      const existingCertificate = await Certificate.findOne({ where: { user_id: evaluation.user_id } });
      if (!existingCertificate) {
        // Create a certificate with a downloadable URL
        await Certificate.create({
          user_id: evaluation.user_id,
          issued_date: new Date(),
          certificate_url: `https://example.com/certificates/${evaluation.user_id}.pdf` // Example URL
        });
      }
    }

    res.status(200).json({ message: 'Final evaluations calculated and certificates generated for passed users.' });
  } catch (error) {
    console.error("Error during final evaluation calculation:", error.message);
    res.status(500).json({ error: error.message });
  }
};