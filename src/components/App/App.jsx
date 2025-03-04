import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/filter/slice";

import Layout from "../ui/Layout/Layout";
import Notification from "../ui/Notification/Notification";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const DetailsPage = lazy(() => import("../../pages/DetailsPage/DetailsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(resetFilters());
    }
  }, [location.pathname, dispatch]);

  return (
    <Layout>
      <Notification />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
