import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "../ui/Layout/Layout";

import "./App.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const DetailsPage = lazy(() => import("../../pages/DetailsPage/DetailsPage"));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
