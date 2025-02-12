// src/components/ProductForm.js
import { useState } from 'react';

const Add_product = () => {
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://your-backend-api.com/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product, price }),
      });

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex justify-center items-center w-full'>
      <div className="w-full max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-md">
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-gray-700">
              Product
            </label>
            <input
              type="text"
              id="product"
              name="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
);
};

export default Add_product;