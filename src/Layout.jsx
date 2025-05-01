import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./Home.jsx";

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
    </div>
  );
}

export default Layout;