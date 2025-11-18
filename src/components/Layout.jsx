import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Navbar />

            <div className="w-full h-full pt-12 flex gap-2">
                <Sidebar />
                <div className="flex-1 p-3 overflow-x-auto">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
}
