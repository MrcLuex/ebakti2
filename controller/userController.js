const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { email, password, name, gender, date_of_birth, student_id, department, address } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat pengguna baru
    const newUser = await User.create({
      role: 'peserta', // Default role untuk registrasi
      email,
      password: hashedPassword,
      name,
      gender,
      date_of_birth,
      student_id,
      department,
      address,
    });

    // Kirim respons sukses
    res.status(201).json({
      message: 'Registration successful',
      user: {
        id: newUser.user_id,
        email: newUser.email,
        name: newUser.name,
        gender: newUser.gender,
        date_of_birth: newUser.date_of_birth,
        student_id: newUser.student_id,
        department: newUser.department,
        address: newUser.address,
      },
    });
  } catch (error) {
    console.error("Error during registration:", error.message);
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Cari pengguna berdasarkan email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'Email tidak ditemukan' });
    }

    // Periksa password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Password salah' });
    }

    // Buat JWT token
    const token = jwt.sign(
      { id: user.user_id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Kirim respons sukses
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.user_id,
        email: user.email,
        name: user.name,
        gender: user.gender,
        date_of_birth: user.date_of_birth,
        student_id: user.student_id,
        department: user.department,
        address: user.address,
      },
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ error: error.message });
  }
};