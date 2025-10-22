import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import RightSidebar from "../components/RightSidebar.jsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Home;
