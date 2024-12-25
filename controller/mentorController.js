// controllers/mentorController.js
const Mentor = require('../models/Mentor');

exports.createMentor = async (req, res) => {
    const { name } = req.body;

    try {
        const newMentor = await Mentor.create({ name });

        return res.status(201).json({
            message: 'Mentor created successfully',
            mentor: newMentor,
        });
    } catch (error) {
        console.error("Error during mentor creation:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat membuat mentor.', error });
    }
};

exports.getMentors = async (req, res) => {
    try {
        const mentors = await Mentor.findAll();
        return res.status(200).json(mentors);
    } catch (error) {
        console.error("Error fetching mentors:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat mengambil mentor.', error });
    }
};

exports.updateMentor = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const mentor = await Mentor.findByPk(id);
        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }

        await mentor.update({ name });

        return res.status(200).json({
            message: 'Mentor updated successfully',
            mentor,
        });
    } catch (error) {
        console.error("Error during mentor update:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui mentor.', error });
    }
};

exports.deleteMentor = async (req, res) => {
    const { id } = req.params;

    try {
        const mentor = await Mentor.findByPk(id);
        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }

        await mentor.destroy();
        return res.status(200).json({ message: 'Mentor deleted successfully' });
    } catch (error) {
        console.error("Error during mentor deletion:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat menghapus mentor.', error });
    }
};