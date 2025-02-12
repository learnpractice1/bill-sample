function buildQuery(page, limit, search) {
    const offset = (page - 1) * limit;
    let sql = 'SELECT * FROM products';
    const values = [];
  
    if (search) {
      sql += ' WHERE name LIKE ? OR description LIKE ?';
      values.push(`%${search}%`, `%${search}%`);
    }
  
    sql += ' LIMIT ? OFFSET ?';
    values.push(parseInt(limit), parseInt(offset));
  
    return { sql, values };
  }
  module.exports = { buildQuery };