  // const foreighKey = data?.[0].id;

import { QueryClient, useMutation } from "@tanstack/react-query";
import { supabase } from "../lib";
import { useState } from "react";






  interface userType {
    user_email: string,
    refetchData:  () => void
  }


  export  function useCreateUser ({user_email, refetchData} : userType) {
   
    const [queryClient] = useState(() => new QueryClient())



      
      const mutation = useMutation({
          mutationFn: async () => {
              try {
                   await supabase.from('favorites').insert({'email': user_email})
             

            } catch (error) {
                throw new Error('error')
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['userData']})
            refetchData()
        
        }
    })

    return mutation

  }