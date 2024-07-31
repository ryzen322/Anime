import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Navigation from "./components/Navigation/Navigation";
import { popularAnime } from "./services/api";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { data } = useQuery({
    queryKey: ["popular"],
    queryFn: popularAnime,
  });

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
