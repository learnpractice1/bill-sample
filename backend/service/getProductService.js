const pool = require('../config/db');
async function getTotalProductsCount(search) {
    let countSql = 'SELECT COUNT(*) AS total FROM products';
    if (search) {
      countSql += ' WHERE name LIKE ? OR description LIKE ?';
    }
    const [countResult] = await pool.execute(countSql, search ? [`%${search}%`, `%${search}%`] : []);
    return countResult[0].total;
  }
  module.exports = { getTotalProductsCount };