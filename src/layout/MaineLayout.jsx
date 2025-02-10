import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function MaineLayout() {
  return (
    <div className="flex flex-col md:flex-row gap-2  min-h-screen">
      <Navbar className="md:w-20 md:h-screen w-full h-16 fixed md:relative bg-dark2" />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MaineLayout;
