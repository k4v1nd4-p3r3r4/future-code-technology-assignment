const pool = require('../config/db');

const createProduct = async (name,price,quantity)=>{
    const [result] = await pool.execute(
        'INSERT INTO products (name, price, quantity) VALUES (?,?,?)',
        [name, price, quantity]
    );
    return result.insertId;
}

const findAllProducts = async () => {
    const [rows] = await pool.execute('SELECT * FROM products');
    return rows;
}

const findProductById = async (id) => {
    const [rows] = await pool.execute('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
}



module.exports = { createProduct, findAllProducts, findProductById };

