import { useApp } from '../../context/AppContext';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import BottomNav from './BottomNav';

const MainLayout = ({ children }) => {
  const { sidebarOpen } = useApp();

  return (
    <div className="min-h-screen bg-[#ECECEC]">
      <Navbar />
      <Sidebar />
      <div
        style={{
          marginLeft: sidebarOpen ? '332px' : '',
          paddingTop: '55px',
          minHeight: 'calc(100vh - 62px)',
          backgroundColor: '#ECECEC',
          transition: 'margin-left 0.3s ease',
        }}
        className="pb-[80px] md:pb-8"
      >
        {children}
        <Footer />
      </div>
      <BottomNav />
    </div>
  );
};

export default MainLayout;