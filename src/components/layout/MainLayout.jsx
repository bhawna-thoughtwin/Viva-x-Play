import { useApp } from '../../context/AppContext';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import BottomNav from './BottomNav';

const MainLayout = ({ children }) => {
  const { sidebarOpen } = useApp();

  return (
    <div className="min-h-screen bg-[#ECECEC] ">
      <div className='container sm:w-full sm:max-w-full '>
        <Navbar />

        <div className="grid grid-cols-12 gap-2">
          {/* Sidebar */}
          <div className="col-span-2">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div
            className="
              col-span-12
              md:col-span-10

              pt-[55px]
              min-h-[calc(100vh-62px)]
              bg-[#ECECEC]
            transition-all
            duration-300
            ease-in-out
            ml-0
            md:ml-[75px]
            
            "
          >
              {children}
            </div>
          </div>
        </div>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default MainLayout;