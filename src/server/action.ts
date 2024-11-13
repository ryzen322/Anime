
import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../lib";
import { useUser } from "@clerk/clerk-react";
import { Row } from "../interface/database";
import { useToast } from "@/hooks/use-toast";


  export  function useAddFavorites () {
    const queryClient = useQueryClient();
    const { toast } = useToast();


    const { user  } = useUser();
    const email = user?.emailAddresses[0].emailAddress


      
      const mutation = useMutation({
          mutationFn: async (favorites : Row<'favorites'>) => {
            const {anime_id, description , duration, type, title, total_Episodes, genres, image, rating, } = favorites
              try {
             await supabase.from('favorites').insert({'anime_id' : anime_id, 'description' : description, 'duration': duration, 'type': type, 'title' : title, 'total_Episodes' : total_Episodes, 'genres' : genres, 'image' : image , 'rating' : rating, 'email' : email}).select()



            } catch (error) {
                throw new Error('error')
            }
        },
       
        onSuccess: (_, variables) => {

   // Invalidate every query in the cache
   toast({
    title: `${variables.title}`,
    description: "Succes fully add to your favorite list",
  });
queryClient.invalidateQueries()
// Invalidate every query with a key that starts with `todos`
queryClient.invalidateQueries({ queryKey: ['likes'] })
           
        
        }
    })


    return mutation

  }

  interface RemoveType {
    id: string, 
    title: string,
  }


  export function useRemoveFavorites () {
    const queryClient = useQueryClient();
    const { toast } = useToast();


    const mutation = useMutation ( {
      mutationFn: async (remove : RemoveType) => {
        const {id} = remove
        try {
          await supabase.from('favorites').delete().eq('anime_id', id)
          
        } catch (error) {
          throw new Error('error')
        }
      },
      onSuccess: (_, variables) => {

        // Invalidate every query in the cache
        toast({
          title: `${variables.title}`,
          description: "Succesfully removed to your favorite list",
        });
     queryClient.invalidateQueries()
     // Invalidate every query with a key that starts with `todos`
     queryClient.invalidateQueries({ queryKey: ['likes'] })
                
             
             }
    })



    return mutation
  }