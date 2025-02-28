const pool = require("../config/db"); // Import the database connection

const {decryptData} = require("../utils/decrypt");
const {validateProduct}=require("../utils/validateProduct");
const {addProductService} = require("../service/ProductService");

const { normalizeName } = require("../utils/normalise_txt"); // Assuming you have this utility
const { buildQuery } = require("../utils/queryBuilder");
const { getProductsService,updateProductService } = require("../service/ProductService");

exports.addProduct = async (req, res) => {
  try {
    const { name, price } = decryptData(req.body.encryptedData);
    const normalized_name = validateProduct(name, price);
    const productId = await addProductService(name, normalized_name, price);
    
    res.status(201).json({ message: "Product added", id: productId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const {products,totalproducts}= await getProductsService(req.query.search);
    //const { sql, values } = buildQuery(page, limit, search);
    //const [rows] = await pool.execute(sql, values);
    //const products = await fetchProducts(sql, values
   if (products.length === 0) {
      return res.status(204).json({ message: "No products found"});
    }

    // const totalProducts = await getTotalProductsCount(search);
    // const totalPages = Math.ceil(totalProducts / limit);

    res.status(200).json({
      products: products,
      total: totalproducts,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Server error while fetching products" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;

    // Check if required fields are present
    if (!id || price === undefined) {
      return res.status(400).json({ error: "Product ID and price are required" });
    }
    const product = await updateProductService(id, price);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Server error while updating product" });
  }
};
