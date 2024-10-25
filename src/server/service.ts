import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib";

import { useUser } from "@clerk/clerk-react";



export const useFavoritesAnime = () => {
  const { user  } = useUser();




    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["sample" ],
        queryFn: async () => {
            try {
             
                const { data } = await supabase
                .from('user')
                .select("*")
                .eq("email",  user ? user.emailAddresses[0].emailAddress : '' );
           
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