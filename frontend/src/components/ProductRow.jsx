const ProductRow = ({ product, isEditing, newPrice, onEdit, onSave, onPriceChange }) => {

  return (
    <tr key={product.id}>
      <td className="px-6 py-4 whitespace-nowrap text-tiffin-text font-medium">
        {product.normalized_name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {isEditing ? (
          <input
            type="number"
            value={newPrice}
            onChange={onPriceChange}
            onKeyDown={(e) => e.key === "Enter" && onSave()}
            className="border rounded px-2 py-1 focus:ring focus:ring-tiffin-text outline-none"
          />
        ) : (
          <span className="text-tiffin-text">₹{product.price}</span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {isEditing ? (
          <button
            onClick={onSave}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => onEdit(product.pid)}
            className="bg-actionperform-button hover:bg-actionperform-button text-white px-4 py-2 rounded-md transition"
          >
            Edit
          </button>
        )}
      </td>
    </tr>
  );
};

export default ProductRow;