import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";
import DetailePage from "./page/DetailePage";
import Detail from "./components/Detail";
import Watch from "./components/Watch";
import WatchPage from "./page/WatchPage";

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
        <Route path="/watch">
          <Route index element={<WatchPage />} />
          <Route path=":id" element={<Watch />}></Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
