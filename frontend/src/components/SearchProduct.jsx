const SearchProduct = ({InputChange,InputValue }) => {


  // useEffect(()=>{
  //   const output=Search(data, searchInput)
  //   console.log(output)
  // },[searchInput])

  // const handleInputChange = (e) => {
  //   setSearchInput(e.target.value);
  // };

  return (
    <div>
      <input
        type="text"
        value={InputValue}
        onChange={InputChange}
        placeholder="Search for a product..."
        className="border rounded px-2 py-1 focus:ring focus:ring-blue-500 outline-none"
      />
      {/* You can pass filteredData to another component for rendering */}
    </div>
  );
};

export default SearchProduct;
