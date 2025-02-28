import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProductAPI } from "../api/product_api";

const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, newPrice }) => {
      return await updateProductAPI(id, { price: newPrice });
    },

    onMutate: async ({ id, newPrice }) => {
      await queryClient.cancelQueries({ queryKey: ["products"] });

      const previousProducts = queryClient.getQueryData(["products"]);

      queryClient.setQueryData(["products"], (oldData) => ({
        ...oldData,
        products: oldData?.products?.map((product) =>
          product.id === id ? { ...product, price: newPrice } : product
        ) || [],
      }));

      return { previousProducts };
    },

    onError: (error, _, context) => {
      console.error("Update failed:", error);
      throw new Error(error.message);
      
      if (context?.previousProducts) {
        queryClient.setQueryData(["products"], context.previousProducts);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export default useUpdateProduct;
