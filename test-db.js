const pool = require('./config/db');

(async () => {
    try {
        const [rows] = await pool.query('SELECT 1 + 1 AS solution');
        console.log('Test query result:', rows);
    } catch (err) {
        console.error('Database test failed:', err);
    } finally {
        await pool.end();
    }
})();