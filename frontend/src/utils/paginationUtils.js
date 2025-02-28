export const getPaginatedData = (data, currentPage, itemsPerPage) => {
    if (!data || !data.length) return [];
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };
  