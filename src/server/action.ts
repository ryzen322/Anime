
import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../lib";
import { useUser } from "@clerk/clerk-react";
import { Row } from "../interface/database";


  export  function useAddFavorites () {
    const queryClient = useQueryClient();


   
    const { user  } = useUser();
    const email = user?.emailAddresses[0].emailAddress


      
      const mutation = useMutation({
          mutationFn: async (favorites : Row<'favorites'>) => {
            const {anime_id, description , duration, type, title, total_Episodes, genres, image, rating, } = favorites
              try {
                const {data} =   await supabase.from('favorites').insert({'anime_id' : anime_id, 'description' : description, 'duration': duration, 'type': type, 'title' : title, 'total_Episodes' : total_Episodes, 'genres' : genres, 'image' : image , 'rating' : rating, 'email' : email}).select()
                console.log( data)


            } catch (error) {
                throw new Error('error')
            }
        },
        onSuccess: () => {

   // Invalidate every query in the cache
queryClient.invalidateQueries()
// Invalidate every query with a key that starts with `todos`
queryClient.invalidateQueries({ queryKey: ['likes'] })
           
        
        }
    })

    return mutation

  }