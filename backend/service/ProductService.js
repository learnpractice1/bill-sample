const pool = require("../config/db");
const { v4: uuidv4 } = require("uuid");

exports.addProductService = async (name, normalized_name, price) => {
  try {
    //Use parameterized queries to prevent SQL injection
    const [result] = await pool.execute(
      "INSERT INTO products (name, normalized_name, price,pid) VALUES (?, ?, ?, ?)",
      [name, normalized_name, price, uuidv4()]
    );
    return result.insertId;
  } catch (error) {
    throw new Error({ error: "Server error while adding product" });
  }
};

exports.getProductsService = async (search) =>  {
    
  try{
    let datasql = 'SELECT normalized_name,price,pid FROM products';
    let countsql='SELECT COUNT(*) as count FROM products';
    if (search) {
      datasql += ' WHERE name LIKE ? OR description LIKE ?';
    }
    const [dataResult] = await pool.execute(datasql, search ? [`%${search}%`, `%${search}%`] : []);
    const [countResult] = await pool.execute(countsql);
    return {totalproducts:countResult[0],
      products:dataResult};
  }catch(error){
      throw new Error({ error: "Server error while updating product" });
    }
  }
  exports.updateProductService = async (id, price) => {
    try {
      const [result] = await pool.execute("UPDATE products SET price = ? WHERE pid = ?", [price, id]);
  
      if (result.affectedRows === 0) {
        throw new Error("No product found with the given ID");
      }
  
      return result;
    } catch (error) {
      console.error("Error updating product:", error);
      throw new Error("Server error while updating product");
    }
  };
  