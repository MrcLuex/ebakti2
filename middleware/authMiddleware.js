const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import model User

const authMiddleware = async (req, res, next) => {
  try {
    // Ambil token dari header Authorization
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'Please authenticate' });
    }

    // Verifikasi token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Cari pengguna berdasarkan ID yang didekode dari token
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(401).json({ error: 'User not found, please authenticate' });
    }

    // Tambahkan informasi pengguna ke request object
    req.user = user;

    next(); // Lanjutkan ke middleware berikutnya atau route handler
  } catch (error) {
    console.error('Error in authMiddleware:', error.message);
    res.status(401).json({ error: 'Invalid token' });
  }
};

const adminMiddleware = async (req, res, next) => {
  try {
    // Periksa apakah peran pengguna adalah admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }

    next(); // Lanjutkan ke middleware berikutnya atau route handler
  } catch (error) {
    console.error('Error in adminMiddleware:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { authMiddleware, adminMiddleware };
