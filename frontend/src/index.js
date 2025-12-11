import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/signup/login";
import NotFound from "./landing_page/NotFound";
import PublicLayout from "./layout/PublicLayout";
const Home = React.lazy(() =>
  import("./dashboard/components/Home.js")
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route
        path="/kite/*"
        element={
          <React.Suspense fallback={<div>Loading dashboard…</div>}>
            {localStorage.getItem("token") ? (
              <Home/>
            ) : (
              <Navigate to="/login" />
            )}
          </React.Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />

    </Routes>
  </BrowserRouter>
);

