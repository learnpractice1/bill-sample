import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const add_productAPI=async(data)=>{
    try{
        const response=await axios.post(`${BASE_URL}/product/lists`,data,{
            headers: {
              "Content-Type": "application/json",
            },
          });
          return response.data;
    }
    catch (error) {
          const errorMessage = error.response ? error.response.data : error.message;
          throw new Error(errorMessage)
      }
}

export const get_productAPI=async()=>{
    try{
        const response=await axios.get(`${BASE_URL}/product/lists`);
        return response;
    }
    catch (error) {
          const errorMessage = error.response ? error.response.data : error.message;
          throw new Error(errorMessage)
      }
}

export const updateProductAPI = async (id, updateData) => {
  try {
    const response = await axios.patch(`${BASE_URL}/product/lists/${id}`, updateData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data; // Return updated product data
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Failed to update product";
    throw new Error(errorMessage);
  }
};
