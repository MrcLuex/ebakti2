// controllers/periodController.js
const Period = require('../models/Period');

exports.createPeriod = async (req, res) => {
    const { period_name, start_date, end_date } = req.body;

    try {
        const newPeriod = await Period.create({
            period_name,
            start_date,
            end_date,
        });

        return res.status(201).json({
            message: 'Period created successfully',
            period: newPeriod,
        });
    } catch (error) {
        console.error("Error during period creation:", error.message);
        return res.status(500).json({ message: 'Error creating period.', error: error.message });
    }
};

exports.getPeriods = async (req, res) => {
    try {
        const periods = await Period.findAll();
        return res.status(200).json(periods);
    } catch (error) {
        console.error("Error fetching periods:", error.message);
        return res.status(500).json({ message: 'Error fetching periods.', error: error.message });
    }
};

exports.updatePeriod = async (req, res) => {
    const { id } = req.params;
    const { period_name, start_date, end_date } = req.body;

    try {
        const period = await Period.findByPk(id);
        if (!period) {
            return res.status(404).json({ message: 'Period not found' });
        }

        await period.update({
            period_name,
            start_date,
            end_date,
        });

        return res.status(200).json({
            message: 'Period updated successfully',
            period,
        });
    } catch (error) {
        console.error("Error during period update:", error.message);
        return res.status(500).json({ message: 'Error updating period.', error: error.message });
    }
};

exports.deletePeriod = async (req, res) => {
    const { id } = req.params;

    try {
        const period = await Period.findByPk(id);
        if (!period) {
            return res.status(404).json({ message: 'Period not found' });
        }

        await period.destroy();
        return res.status(200).json({ message: 'Period deleted successfully' });
    } catch (error) {
        console.error("Error during period deletion:", error.message);
        return res.status(500).json({ message: 'Error deleting period.', error: error.message });
    }
};