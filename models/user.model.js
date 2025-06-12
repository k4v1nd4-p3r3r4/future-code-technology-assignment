const pool = require('../config/db');
const bcrypt = require('bcrypt');

const createUser = async (name, username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.execute(
        'INSERT INTO users (name, username, password) VALUES (?,?,?)',
        [name, username, hashedPassword]
    );
    return result.insertId;
};

const findUserByUsername = async (username) => {
    const [rows] = await pool.execute(
        'SELECT * FROM users WHERE username = ?',
        [username]
    );
    return rows[0];
};

const findByCredentials = async (username, password) => {
    const user = await findUserByUsername(username);
    if (!user) return null;
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch ? user : null;
};

module.exports = { createUser, findUserByUsername, findByCredentials };