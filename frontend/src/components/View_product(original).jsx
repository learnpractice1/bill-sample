import { useState, useEffect } from "react";

import useProducts from "../hooks/useProduct";
import useUpdateProduct from "../hooks/useUpdateProduct";

import Pagination from "./ProductPagination";
import ProductRow from "./ProductRow";

import SearchProduct from "./SearchProduct";


const ProductsList = () => {
  const [editProductId, setEditProductId] = useState(null);
  const [newPrice, setNewPrice] = useState("");
  const { mutateAsync: updateProduct } = useUpdateProduct();
  const { data, isLoading, error, refetch } = useProducts();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  //Search bar
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    if (editProductId && data?.products) {
      const product = data.products.find((p) => p.id === editProductId);
      setNewPrice(product?.price || "");
    }
  }, [editProductId, data]);

  const handleEdit = (id) => setEditProductId(id);
  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setNewPrice(value);
    } else {
      setErrorMessage(`Invalid price format. Please enter a valid number.`);
    }
  };
  const handleSave = async () => {
    try {
      await updateProduct({ id: editProductId, newPrice });
      setSuccessMessage(`Product updated successfully!`);
      setEditProductId(null);
      refetch();
    } catch (error) {
      setErrorMessage(`Failed to update product: ${error.message}`);
    }
  };

  //for search bar inside the table
    const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  if (isLoading)
    return <p className="text-center text-gray-600">Loading products...</p>;
  if (error)
    return (
      <div className="text-center text-red-500">
        <p>Error: {error.message}</p>
        <button
          onClick={refetch}
          className="mt-2 bg-tiffin-button hover:bg-tiffin-button-hover text-tiffin-button-text px-4 py-2 rounded-md transition"
        >
          Retry
        </button>
      </div>
    );

  // Pagination Logic
  const totalProducts = data?.total?.count || 0;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = data.products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div className="p-4 mt-10 bg-tiffin-secondary-bg shadow-md rounded-lg transition-all duration-300 md:ml-48 lg:ml-64 sm:ml-24 min-h-screen overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 text-tiffin-text">
        Products ({data?.total?.count})
      </h2>
      <SearchProduct InputChange={handleInputChange} InputValue={searchInput} />


      {successMessage ? (
        <div className="mb-4 text-green-600 bg-green-100 p-2 rounded-md text-center">
          {successMessage}
        </div>
      ) : errorMessage ? (
        <div className="mb-4 text-red-600 bg-red-100 p-2 rounded-md text-center">
          {errorMessage}
        </div>
      ) : null}
      {data?.products?.length > 0 ? (
        <>
          <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow">
            <thead className="bg-tiffin-placeholder">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-tiffin-input-text">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-tiffin-input-text">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-tiffin-input-text">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-tiffin-bg divide-y divide-gray-200">
              {paginatedProducts.map((product) => (
                <ProductRow
                  key={product.id}
                  product={product}
                  isEditing={editProductId === product.pid}
                  newPrice={newPrice}
                  onEdit={handleEdit}
                  onSave={handleSave}
                  onPriceChange={handlePriceChange}
                />
              ))}
            </tbody>
          </table>
          {/* Pagination Component */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          />
        </>
      ) : (
        <p className="text-gray-500 text-center">No products available</p>
      )}
      <button
        onClick={refetch}
        className="mt-4 bg-actionperform-button hover:bg-actionperform-button-hover text-tiffin-button-text px-4 py-2 rounded-md transition"
      >
        Refresh
      </button>
    </div>
  );
};

export default ProductsList;
