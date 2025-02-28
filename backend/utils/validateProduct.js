  exports.validateProduct = (name, price) => {
    if (!name || typeof name !== "string" || name.trim().length === 0 || !price) {
        return res.status(400).json({ error: "Name and price are required" });
      }
      
      const normalized_name = name.trim().toLowerCase(); // Trim whitespace and convert to lowercase
    
      if (normalized_name.length === 0) {
        throw new Error({ error: "Name cannot be empty or whitespace only" });
      }
      return normalized_name
  }
