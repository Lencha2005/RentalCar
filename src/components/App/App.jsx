import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, useEffect } from "react";
import Layout from "../ui/Layout/Layout";

import "./App.css";
import Notification from "../ui/Notification/Notification";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../redux/filter/slice";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const DetailsPage = lazy(() => import("../../pages/DetailsPage/DetailsPage"));

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
      </Routes>
    </Layout>
  );
}

export default App;
