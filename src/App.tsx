import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";
import { DashboardHome } from "./components/Dashboard-home";

// lazy components
const Main = lazy(() => import("./page/Home"));
const DetailPage = lazy(() => import("./page/DetailePage"));
const DetailID = lazy(() => import("./components/Detail"));
const CollectionPage = lazy(() => import("./page/CollectionPage"));
const Collection = lazy(() => import("./components/Collection"));
const NotFoundPage = lazy(() => import("./page/NotFoundPage"));
const NewsPage = lazy(() => import("./page/NewsPage"));
const Dashboard = lazy(() => import("./page/Dashboard"));
const Favorites = lazy(() => import("./components/Favorites"));

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
          <Route path="/news" element={<NewsPage />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="project" element={<DashboardHome />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
