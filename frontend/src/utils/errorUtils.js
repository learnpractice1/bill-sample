export const formatErrorMessage = (error) => {
    if (!error) return "An unknown error occurred.";
  
    if (error.response?.data?.message) {
      return error.response.data.message;
    }
  
    if (error.message) {
      return error.message;
    }
  
    return "Something went wrong. Please try again.";
  };
  