// controllers/groupController.js
const Group = require('../models/Group');
const Mentor = require('../models/Mentor');
const Period = require('../models/Period');
const User = require('../models/User');

// Exporting the functions directly
exports.createGroup = async (req, res) => {
    const { group_name, mentor1_id, mentor2_id, period_id } = req.body;

    try {
        // Check if mentors and period exist
        const mentor1 = await Mentor.findByPk(mentor1_id);
        const mentor2 = await Mentor.findByPk(mentor2_id);
        const period = await Period.findByPk(period_id);

        if (!mentor1 || !mentor2 || !period) {
            return res.status(400).json({ message: 'Mentor atau periode tidak valid.' });
        }

        // Create new group
        const newGroup = await Group.create({ group_name, mentor1_id, mentor2_id });

        return res.status(201).json({
            message: 'Group created successfully',
            group: newGroup,
        });
    } catch (error) {
        console.error("Error during group creation:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat membuat grup.', error });
    }
};

exports.addParticipantsToGroup = async (req, res) => {
    const { group_id, user_ids } = req.body; // user_ids is an array of user IDs

    try {
        // Check if group exists
        const group = await Group.findByPk(group_id);
        if (!group) {
            return res.status(404).json({ message: 'Group tidak ditemukan.' });
        }

        // Check if users exist and only take those with the role 'peserta'
        const users = await User.findAll({
            where: {
                user_id: user_ids,
                role: 'peserta' // Ensure only participants are taken
            },
        });

        if (users.length === 0) {
            return res.status(400).json({ message: 'Tidak ada pengguna yang valid untuk ditambahkan atau semua pengguna bukan peserta.' });
        }

        // Logic to add users to the group
        // For example, we could create a pivot table to store this relationship
        // await group.addUsers(users); // if using a pivot table

        return res.status(200).json({
            message: 'Pengguna berhasil ditambahkan ke grup.',
            group,
            participants: users,
        });
    } catch (error) {
        console.error("Error during adding participants to group:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat menambahkan pengguna ke grup.', error });
    }
};

exports.getGroups = async (req, res) => {
    try {
        const groups = await Group.findAll({
            include: [{ model: Mentor }, { model: Period }],
        });
        return res.status(200).json(groups);
    } catch (error) {
        console.error("Error fetching groups:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat mengambil grup.', error });
    }
};