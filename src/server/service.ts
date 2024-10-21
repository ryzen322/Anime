import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib";


export const useFavoritesAnime = () => {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["sample"],
        queryFn: async () => {
            try {
                const { data } = await supabase
                .from("my_anime")
                .select("*")
                .eq("email", "arteezy626@gmail.com");
              return data;
            } catch (error) {
                throw new Error('unable to fetch')
            }
        },
      });
    
      return {
        data, isLoading,error, isError
      }

}