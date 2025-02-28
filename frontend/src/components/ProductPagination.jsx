const Pagination = ({ currentPage, totalPages, onNext, onPrev }) => {
    return (
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={onPrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md transition ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-tiffin-button hover:bg-tiffin-button-hover text-tiffin-button-text"
          }`}
        >
          Previous
        </button>
        <span className="text-tiffin-text font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md transition ${
            currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-tiffin-button hover:bg-tiffin-button-hover text-tiffin-button-text"
          }`}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  