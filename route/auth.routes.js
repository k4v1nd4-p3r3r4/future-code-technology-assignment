const pool = require('../config/db');

const createUser = async (username,password) => {
    const [result] = await pool.execute(
        'INSERT INTO users (username, password) VALUES (?,?)',
        [username, password]
    );
    return result.insertId;
};
    

module.exports = {createUser};