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

      {/*
        Figma: left 332px (sidebar 300 + gap 32), top 117px (navbar 62 + padding 55)
        Mobile: no left margin, sidebar overlays
        pb-[80px] on mobile leaves room above the fixed BottomNav (64px + 16px breathing room)
      */}
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

      {/* Fixed bottom navigation — mobile only (hidden on md+) */}
      <BottomNav />
    </div>
  );
};

export default MainLayout;