import { useQuery } from "@tanstack/react-query";


import { useUser } from "@clerk/clerk-react";
import { getAllList, getFavorites } from "../services/api";



export type CollectionType = 'favorite' | 'watch later' | 'bookmarks' | 'collection' 


export const useFavoritesAnime = (collection: CollectionType) => {
  const { user  } = useUser();

  const email = user?.emailAddresses[0]?.emailAddress

      const { data,  isLoading   }= useQuery({
      queryKey: ['likes', email, collection],
      queryFn: () => getFavorites(email!, collection),
      enabled: !!email
    })    
      return {
        data, isLoading,
      }

}



export const useGetAllList = () => {
  const { user  } = useUser();
  const email = user?.emailAddresses[0]?.emailAddress

      const { data,  isLoading   }= useQuery({
      queryKey: ['likes', email,],
      queryFn: () => getAllList(email!),
      enabled: !!email
    })    
      return {
        data, isLoading,
      }

}