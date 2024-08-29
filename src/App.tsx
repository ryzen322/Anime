import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";
import DetailePage from "./page/DetailePage";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail">
          <Route index element={<DetailePage />} />
          <Route path=":id" element={<Detail />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
