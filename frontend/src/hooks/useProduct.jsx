import { useQuery } from "@tanstack/react-query";
import { get_productAPI } from "../api/product_api";

const useProducts = () => {
    const fetchProducts=async()=>{
            const response = await get_productAPI();
            return response.data;
    }
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: false,
    throwOnError: false,
  });
};

export default useProducts;
