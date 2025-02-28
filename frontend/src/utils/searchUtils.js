// Search.js
const Search = ( data, searchInput ) => {
    // Log data for debugging
    // If searchInput is empty, return data (or empty array if data is falsy)
    if (!searchInput || searchInput === "") {
      return data || [];
    }


    // Ensure data is an array before filtering
    return (data || []).filter((item) =>
      item.normalized_name?.toLowerCase().includes(searchInput.toLowerCase())
    );
  };
  
  export default Search;