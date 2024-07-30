import { useQuery } from "@tanstack/react-query";

import { popularAnime } from "./services/api";

function App() {
  const { data, error, isError } = useQuery({
    queryKey: ["anime"],
    queryFn: popularAnime,
  });

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
