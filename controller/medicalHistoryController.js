// controllers/medicalHistoryController.js
const MedicalHistory = require('../models/MedicalHistory');

exports.createMedicalHistory = async (req, res) => {
    const { user_id, medical_condition, medication, allergies } = req.body;

    try {
        const newHistory = await MedicalHistory.create({
            user_id,
            medical_condition,
            medication,
            allergies,
        });

        return res.status(201).json({
            message: 'Medical history created successfully',
            history: newHistory,
        });
    } catch (error) {
        console.error("Error during medical history creation:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat membuat riwayat medis.', error });
    }
};

exports.getMedicalHistories = async (req, res) => {
    try {
        const histories = await MedicalHistory.findAll();
        return res.status(200).json(histories);
    } catch (error) {
        console.error("Error fetching medical histories:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat mengambil riwayat medis.', error });
    }
};

exports.updateMedicalHistory = async (req, res) => {
    const { id } = req.params;
    const { medical_condition, medication, allergies } = req.body;

    try {
        const history = await MedicalHistory.findByPk(id);
        if (!history) {
            return res.status(404).json({ message: 'Medical history not found' });
        }

        await history.update({
            medical_condition,
            medication,
            allergies,
        });

        return res.status(200).json({
            message: 'Medical history updated successfully',
            history,
        });
    } catch (error) {
        console.error("Error during medical history update:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui riwayat medis.', error });
    }
};

exports.deleteMedicalHistory = async (req, res) => {
    const { id } = req.params;

    try {
        const history = await MedicalHistory.findByPk(id);
        if (!history) {
            return res.status(404).json({ message: 'Medical history not found' });
        }

        await history.destroy();
        return res.status(200).json({ message: 'Medical history deleted successfully' });
    } catch (error) {
        console.error("Error during medical history deletion:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat menghapus riwayat medis.', error });
    }
};