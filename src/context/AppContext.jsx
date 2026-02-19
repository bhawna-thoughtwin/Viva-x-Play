import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  /* Mobile (<768px) starts closed, desktop (>=768px) starts open */
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 768);
  const [activeNav, setActiveNav] = useState('Sports');

  /* Auto-close on mobile, auto-open on desktop when window resizes */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);   // desktop → always open
      } else {
        setSidebarOpen(false);  // mobile  → always closed until hamburger tap
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <AppContext.Provider value={{ sidebarOpen, toggleSidebar, activeNav, setActiveNav }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
