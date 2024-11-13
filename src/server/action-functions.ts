import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useAddFavorites } from "./action";

interface actionType {
    id: string;
    image: string | null;
    title: string;
    genres: string[] | null;
    type: string | null;
    duration: number | null;
    description: string | null;
    total_episode: number | null;
    rating: number | null;

}



export const useActions = (actionT: actionType) => {

    const {description, duration,  genres , id , image , rating , title , total_episode , type} = actionT
    const navigate = useNavigate();
    const { user } = useUser();
  
    const { mutateAsync } = useAddFavorites();
  
    const addFavorites = () => {
      if (!user) {
        navigate("sign-in");
      }
  
      if (user) {
        mutateAsync({
          anime_id: id,
          description: description,
          duration: duration,
          genres: genres,
          image: image,
          rating: rating,
          title: title,
          total_Episodes: total_episode,
          type: type,
          created_at: "",
          email: "",
          id: "",
        });
      }
    };


    return {
        addFavorites
    }

}