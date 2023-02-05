import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages';


const Root = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={LandingPage} />
          <Route path="/app">
            <div className="min-h-screen">
              <div className="gradient-bg-welcome">
                <Navbar />
                <Welcome />
              </div>
              <Services />
              <Transactions />
              <Footer />
            </div>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };

  export default Root;
  