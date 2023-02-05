import { Navbar, Welcome, Footer, Services, Transactions } from "../components";
import { Link, NavLink} from 'react-router-dom'


const InfinityPay = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default InfinityPay;