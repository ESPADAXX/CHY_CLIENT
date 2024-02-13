import { Outlet } from "react-router-dom";
import SideNav from "../../../components/layouts/SideNav/SideNav";
import NavBarAdmin from "../../../components/layouts/navBarAdmin/navBarAdmin";

function Home() {
  return (
    <>
      <div className="flex relative w-full h-screen">
        <SideNav />
        <div className="flex flex-col w-full">
          <NavBarAdmin />
          <div className="overflow-scroll">
            <Outlet />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Home;
