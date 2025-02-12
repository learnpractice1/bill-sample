const pool = require('../config/db'); // Import the database connection
const { normalizeName } = require('../utils/normalise_txt'); // Assuming you have this utility
const{buildQuery}=require('../utils/queryBuilder');
const{getTotalProductsCount}=require('../service/getProductService');

//To add a new product
exports.addProduct = async (req, res) => {
    const { name, price, active } = req.body;
	
	// Validate input
    if (!name || typeof name !== 'string' || name.trim().length === 0 || !price) {
        return res.status(400).json({ error: 'Name and price are required' });
    }

    const normalized_name = name.trim().toLowerCase(); // Trim whitespace and convert to lowercase

	if(normalized_name.length === 0){
		return res.status(400).json({ error: 'Name cannot be empty or whitespace only' });
	}

    try {
        //Use parameterized queries to prevent SQL injection
        const [result] = await pool.execute(
            'INSERT INTO products (name, normalized_name, price, active) VALUES (?, ?, ?, ?)',
            [name, normalized_name, price, active]
        );
        res.status(201).json({ message: 'Product added', id: result.insertId });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Server error while adding product' });
    }
}
exports.getProducts = async (req, res) => {
    try {
      const { page = 1, limit = 10, search } = req.query;
      const { sql, values } = buildQuery(page, limit, search);
      const [rows] = await pool.execute(sql, values);
      //const products = await fetchProducts(sql, values);
      const products = rows
      
      if (products.length === 0) {
        return res.status(204).json({ message: "No products found" });
      }
  
      const totalProducts = await getTotalProductsCount(search);
      const totalPages = Math.ceil(totalProducts / limit);
  
      res.status(200).json({
        products: products,
        totalPages: totalPages,
        currentPage: parseInt(page),
        totalProducts: totalProducts
      });
  
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Server error while fetching products' });
    }
  };

