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

      <div className='grid grid-cols-12 gap-2'>
         <div className="col-span-2 ">
 <Sidebar />

         </div>
       
        <div
          style={{
            // marginLeft: sidebarOpen ? '332px' : '',
            paddingTop: '55px',
            minHeight: 'calc(100vh - 62px)',
            
            backgroundColor: '#ECECEC',
            transition: 'margin-left 0.3s ease',
          }}
          className="col-span-10"
        >
          {children}

        </div>
      </div>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default MainLayout;