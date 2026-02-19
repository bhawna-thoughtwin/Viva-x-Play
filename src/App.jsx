import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import MainLayout from './components/layout/MainLayout';

import Home from './pages/Home';
import Sports from './pages/Sports';
import Casino from './pages/Casino';
import LiveDealer from './pages/LiveDealer';
import Promotions from './pages/Promotions';

import AMLPolicy from './pages/about/AMLPolicy';
import CookiePolicy from './pages/about/CookiePolicy';
import DisputePolicy from './pages/about/DisputePolicy';
import KYCPolicy from './pages/about/KYCPolicy';
import PrivacyPolicy from './pages/about/PrivacyPolicy';
import ResponsibleGaming from './pages/about/ResponsibleGaming';
import SelfExclusionPolicy from './pages/about/SelfExclusionPolicy';
import TermsAndConditions from './pages/about/TermsAndConditions';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppProvider>
        <Routes>

          {/* Routes WITHOUT Navbar */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Routes WITH Navbar (MainLayout) */}
          <Route
            path="/*"
            element={
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sports" element={<Sports />} />
                  <Route path="/casino" element={<Casino />} />
                  <Route path="/live-dealer" element={<LiveDealer />} />
                  <Route path="/promotions" element={<Promotions />} />
                  <Route path="/about/aml-policy" element={<AMLPolicy />} />
                  <Route path="/about/cookie-policy" element={<CookiePolicy />} />
                  <Route path="/about/dispute-policy" element={<DisputePolicy />} />
                  <Route path="/about/kyc-policy" element={<KYCPolicy />} />
                  <Route path="/about/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/about/responsible-gaming" element={<ResponsibleGaming />} />
                  <Route path="/about/self-exclusion-policy" element={<SelfExclusionPolicy />} />
                  <Route path="/about/terms-and-conditions" element={<TermsAndConditions />} />
                </Routes>
              </MainLayout>
            }
          />

        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
