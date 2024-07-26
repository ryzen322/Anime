import { useQuery } from "@tanstack/react-query";
import { instance } from "./services/instance";
import { RandonAnime } from "./types";

const fetchAnime = async (): Promise<RandonAnime> => {
  return await instance
    .get("meta/anilist/random-anime")
    .then(({ data }) => {
      return data;
    })
    .catch((err) => err);
};

function App() {
  const { data } = useQuery({
    queryKey: ["anime"],
    queryFn: fetchAnime,
  });

  console.log(data?.id);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
