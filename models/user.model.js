const pool = require('../config/db');

const createUser = async (name,username,password) => {
    const [result] = await pool.execute(
        'INSERT INTO users (name, username, password) VALUES (?,?,?)',
        [name,username, password]
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
    const [rows] = await pool.execute(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password]
    );
    return rows[0];
};
    

module.exports = {createUser, findUserByUsername, findByCredentials};