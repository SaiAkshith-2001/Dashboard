import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import RightSidebar from "../components/RightSidebar.jsx";
import EcommerceDashboard from "../components/EcomDashboard.jsx";
import OrderList from "../components/OrderList.jsx";
const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50">
        <Header />
        <EcommerceDashboard />
        {/* <OrderList /> */}
      </div>
      <RightSidebar />
    </div>
  );
};

export default Dashboard;
