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

const updateProduct = async (id, name, price, quantity) => {
    await pool.execute(
        'UPDATE products SET name = ?, price = ?, quantity = ? WHERE id = ?',
        [name, price, quantity, id]
    ); 
}

const deleteProduct = async (id) => {
    await pool.execute('DELETE FROM products WHERE id = ?', [id]);
}


module.exports = { createProduct, findAllProducts, findProductById, updateProduct, deleteProduct };

