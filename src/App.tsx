import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";

// lazy components
const Main = lazy(() => import("./page/Home"));
const DetailPage = lazy(() => import("./page/DetailePage"));
const DetailID = lazy(() => import("./components/Detail"));
const CollectionPage = lazy(() => import("./page/CollectionPage"));
const Collection = lazy(() => import("./components/Collection"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense
        fallback={<div className=" h-dvh w-full bg-Primary">loading...</div>}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail">
            <Route index element={<DetailPage />} />
            <Route path=":id" element={<DetailID />} />
          </Route>
          <Route path="/collection">
            <Route index element={<CollectionPage />} />
            <Route path=":title" element={<Collection />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
