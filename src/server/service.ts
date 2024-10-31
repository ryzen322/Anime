import { useQuery } from "@tanstack/react-query";


import { useUser } from "@clerk/clerk-react";
import { getFavorites } from "../services/api";




export const useFavoritesAnime = () => {
  const { user  } = useUser();

  const email = user?.emailAddresses[0]?.emailAddress

      const { data,  isLoading   }= useQuery({
      queryKey: ['likes', email],
      queryFn: () => getFavorites(email!),
      enabled: !!email
    })    
      return {
        data, isLoading,
      }

}