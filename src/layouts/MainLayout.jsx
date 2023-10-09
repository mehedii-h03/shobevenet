import { Outlet } from "react-router-dom";
import { NavigationBar } from "../shared/Navbar/NavigationBar";
import { Navibar } from "../shared/Navbar/Navibar";
import Footer from "../shared/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            {/* <NavigationBar></NavigationBar> */}
            <Navibar></Navibar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;