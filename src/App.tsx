import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
