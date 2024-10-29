import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib";

import { useUser } from "@clerk/clerk-react";




export const useFavoritesAnime = () => {
  const { user  } = useUser();

    const email = user?.emailAddresses[0].emailAddress 

      const { data,  status, error, refetch }= useQuery({
      queryKey: ['userData'],
      queryFn: async () => {
        try {
          const { data = [] } = await supabase
          .from('user')
          .select(`*, favorites(*)`).eq('email', user ? user.emailAddresses[0].emailAddress : '')
              if(data?.length === 0){
                throw new Error('unable to fetch')
              }
          return data
        } catch (error) {
          throw new Error('unable to fetch')
          
        }
      }
    })    
      return {
        data, status, error, email, refetch
      }

}