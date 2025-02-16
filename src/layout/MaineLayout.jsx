import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MaineLayout() {
  return (
    <div className="lg:flex ">
      <Navbar />
      <main className="mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default MaineLayout;
