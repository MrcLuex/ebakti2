// controllers/taskSubmissionController.js
const TaskSubmission = require('../models/TaskSubmission');

exports.createTaskSubmission = async (req, res) => {
    const { task_id, user_id, submission_date, score, feedback, status } = req.body;

    try {
        const newSubmission = await TaskSubmission.create({
            task_id,
            user_id,
            submission_date,
            score,
            feedback,
            status,
        });

        return res.status(201).json({
            message: 'Task submission created successfully',
            submission: newSubmission,
        });
    } catch (error) {
        console.error("Error during task submission creation:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat membuat pengumpulan tugas.', error });
    }
};

exports.getTaskSubmissions = async (req, res) => {
    try {
        const submissions = await TaskSubmission.findAll();
        return res.status(200).json(submissions);
    } catch (error) {
        console.error("Error fetching task submissions:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat mengambil pengumpulan tugas.', error });
    }
};

exports.updateTaskSubmission = async (req, res) => {
    const { id } = req.params;
    const { task_id, user_id, submission_date, score, feedback, status } = req.body;

    try {
        const submission = await TaskSubmission.findByPk(id);
        if (!submission) {
            return res.status(404).json({ message: 'Task submission not found' });
        }

        await submission.update({
            task_id,
            user_id,
            submission_date,
            score,
            feedback,
            status,
        });

        return res.status(200).json({
            message: 'Task submission updated successfully',
            submission,
        });
    } catch (error) {
        console.error("Error during task submission update:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui pengumpulan tugas.', error });
    }
};

exports.deleteTaskSubmission = async (req, res) => {
    const { id } = req.params;

    try {
        const submission = await TaskSubmission.findByPk(id);
        if (!submission) {
            return res.status(404).json({ message: 'Task submission not found' });
        }

        await submission.destroy();
        return res.status(200).json({ message: 'Task submission deleted successfully' });
    } catch (error) {
        console.error("Error during task submission deletion:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat menghapus pengumpulan tugas.', error });
    }
};