import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";

const Main = () => {
    const location = useLocation();

    const isLogin = location.pathname.includes('login');
    console.log(location);

    return (
        <div>
            {isLogin || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isLogin || <Footer></Footer>}
        </div>
    );
};

export default Main;