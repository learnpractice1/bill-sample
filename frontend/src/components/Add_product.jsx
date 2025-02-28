import { useState } from "react";
import CryptoJS from "crypto-js";
import { add_productAPI } from "../api/product_api";

const AddProduct = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [error1, setError1] = useState("");
  const [success, setSuccess] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { name: product, price };
  
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      import.meta.env.VITE_SECRET_KEY
    ).toString();
  
    try {
      const response = await add_productAPI({ encryptedData });
  
      // Fix: Use response directly
      if (response) {
        setSuccess(response.message || "Product added successfully!");
      } else {
        setSuccess("Product added successfully!");
      }
  

    } catch (error) {
  
      let errorMessage = "An unknown error occurred"; // Default message
  
      if (error.response) {
        errorMessage = error.response.data?.message || JSON.stringify(error.response.data);
      } else if (error.message) {
        errorMessage = error.message;
      }
  
      setError1(errorMessage);
      console.error("Formatted Error:", errorMessage);
    }
  };
  

  return (
    <div>
      <div className="min-h-[50vh] flex items-center justify-center bg-tiffin-bg py-12 sm:px-6 lg:px-8 max-w-lg mx-auto">
        <div className="max-w-md w-full space-y-8 bg-tiffin-secondary-bg p-8 rounded-lg shadow-md">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-tiffin-text">
              Add Dish Name and Price
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm ">
              <div>
                <label htmlFor="product" className="sr-only">
                  Product
                </label>
                <input
                  id="product"
                  name="product"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-tiffin-border placeholder-tiffin-placeholder text-tiffin-text rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300"
                  placeholder="E.g. Palaak Paneer"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="price" className="sr-only">
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-tiffin-border placeholder-tiffin-placeholder text-tiffin-text rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition-all duration-300"
                  placeholder="E.g. ₹150"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>

            {/* Error Message */}
            {error1 && (
              <div className="text-red-500 text-sm mt-2 bg-red-100 p-2 rounded-md">
                {error1}
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="text-green-500 text-sm mt-2 bg-green-100 p-2 rounded-md">
                {success}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-tiffin-button-text bg-tiffin-button hover:bg-tiffin-button-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
