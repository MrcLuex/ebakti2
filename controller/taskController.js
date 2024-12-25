// controllers/taskController.js
const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    const { title, description, due_date, status } = req.body;

    try {
        const newTask = await Task.create({
            title,
            description,
            due_date,
            status,
        });

        return res.status(201).json({
            message: 'Task created successfully',
            task: newTask,
        });
    } catch (error) {
        console.error("Error during task creation:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat membuat tugas.', error });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        return res.status(200).json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat mengambil tugas.', error });
    }
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, due_date, status } = req.body;

    try {
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await task.update({
            title,
            description,
            due_date,
            status,
        });

        return res.status(200).json({
            message: 'Task updated successfully',
            task,
        });
    } catch (error) {
        console.error("Error during task update:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat memperbarui tugas.', error });
    }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await task.destroy();
        return res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error("Error during task deletion:", error.message);
        return res.status(500).json({ message: 'Terjadi kesalahan saat menghapus tugas.', error });
    }
};