import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import MainLayout from './components/layout/MainLayout';

import Home from './pages/Home';
import Sports from './pages/Sports';
import LiveDealer from './pages/LiveDealer';
import PromotionsGrid from './pages/PromotionsGrid';
import Promotion from './pages/Promotion';

import AMLPolicy from './pages/about/AMLPolicy';
import CookiePolicy from './pages/about/CookiePolicy';
import DisputePolicy from './pages/about/DisputePolicy';
import KYCPolicy from './pages/about/KYCPolicy';
import PrivacyPolicy from './pages/about/PrivacyPolicy';
import ResponsibleGaming from './pages/about/ResponsibleGaming';
import SelfExclusionPolicy from './pages/about/SelfExclusionPolicy';
import TermsAndConditions from './pages/about/TermsAndConditions';
import GlobalToaster from "./components/common/GlobalToaster";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FAQ from './pages/support/faq';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './routes/ProtectedRoute';
import Casino from './pages/Casino';
import LiveCasino from './pages/LiveCasino';

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
        <GlobalToaster />
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
                  <Route path="/live-casino" element={<LiveCasino />} />
                  <Route path="/promotion" element={<PromotionsGrid />} />
                  <Route path="/promotion/detail" element={<Promotion />} />
                  <Route path="/about/aml-policy" element={<AMLPolicy />} />
                  <Route path="/about/cookie-policy" element={<CookiePolicy />} />
                  <Route path="/about/dispute-policy" element={<DisputePolicy />} />
                  <Route path="/about/kyc-policy" element={<KYCPolicy />} />
                  <Route path="/about/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/about/responsible-gaming" element={<ResponsibleGaming />} />
                  <Route path="/about/self-exclusion-policy" element={<SelfExclusionPolicy />} />
                  <Route path="/about/terms-and-conditions" element={<TermsAndConditions />} />
                  <Route path="/support/faq" element={<FAQ />} />
                  <Route path='/profile' element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                
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