import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from "./style";
import {  } from "./components";
import { Billing, Business, CardDeal, Clients, CTA, FooterLanding, NavbarLanding, Stats, Testimonials, HeroNavbar, Footer, Welcome, Services, Loader, Transactions } from "./components";
import { LandingPage, InfinityPay } from './pages';
import ErrorPage from "./error-page";



const App = () => {
  return (
    <BrowserRouter>

    
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>

      <Routes>
        {/* Landing Pages */}
        <Route path='/' element={<LandingPage/>} errorElement= {<ErrorPage />} />
        <Route path='/landingpage' element={<LandingPage/>} errorElement= {<ErrorPage />} />

        {/* Infinity Pay Pages */}
        <Route path='/infinitypay' element={<InfinityPay/>} errorElement= {<ErrorPage />} />

      </Routes>
    </BrowserRouter>
  );
};


export default App
