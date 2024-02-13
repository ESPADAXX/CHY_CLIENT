
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import Footer from "./components/layouts/Footer/Footer";

function App() {

const location=useLocation()
const isAdmin = location.pathname.startsWith("/admin");
  return (
    <>
      {!isAdmin?<Header/>:null}
      <Outlet />
     {!isAdmin?<Footer/>:null
     
      }
    </>
  );
}

export default App;
