import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib";
import { useOutletContext } from "react-router-dom";



export const useFavoritesAnime = () => {
  const user: string = useOutletContext()


    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["sample"],
        queryFn: async () => {
            try {
                const { data } = await supabase
                .from('userData')
                .select("*")
                .eq("email",  user );
            
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