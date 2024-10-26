  // const foreighKey = data?.[0].id;

import { QueryClient, useMutation } from "@tanstack/react-query";
import { supabase } from "../lib";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



  // foreighKey;
  // if (isLoading) {
  //   return <div className=" w-full h-[5rem] bg-stone-600"></div>;
  // }
  // //  sample action
  // // async function addFavorites() {
  // //   console.log("clicked");
  // //   try {
  // //     const { data: x, error } = await supabase
  // //       .from("favorites")
  // //       .insert({ title: "one piece", user_id: data ? foreighKey : "" })
  // //       .select();
  // //     console.log(x);
  // //     console.log(error);
  // //   } catch (error) {
  // //     throw new Error("unable to fetch");
  // //   }
  // // }


  interface userType {
    user_email: string,
    refetchData:  () => void
  }


  export  function useCreateUser ({user_email, refetchData} : userType) {
   
    const [queryClient] = useState(() => new QueryClient())

    const navigate = useNavigate()

      
      const mutation = useMutation({
          mutationFn: async () => {
              try {
                   await supabase.from('user').insert({'email': user_email})
             

            } catch (error) {
                throw new Error('error')
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['userData']})
            refetchData()
            navigate('/dashboard/project')
        }
    })

    return mutation

  }