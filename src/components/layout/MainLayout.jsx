import { useApp } from '../../context/AppContext';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  const { sidebarOpen } = useApp();

  return (
    <div className="min-h-screen bg-[#ececec]">
      <Navbar />
      <Sidebar />

      {/*
        Figma: left 332px (sidebar 300 + gap 32), top 117px (navbar 62 + padding 55)
        Mobile: no left margin, sidebar overlays
      */}
      <div
        style={{
          marginLeft: sidebarOpen ? '332px' : '20px',
          marginTop: '62px',
          paddingTop: '55px',
          paddingRight: '20px',
          paddingBottom: '32px',
          minHeight: 'calc(100vh - 62px)',
          backgroundColor: '#ececec',
          transition: 'margin-left 0.3s ease',
        }}
      >
        {children}
        <Footer />
      </div>

    </div>
  );
};

export default MainLayout;
