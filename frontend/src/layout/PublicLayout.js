import { Outlet } from "react-router-dom";
import Navbar from "../landing_page/Navbar";
import Footer from "../landing_page/Footer";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
