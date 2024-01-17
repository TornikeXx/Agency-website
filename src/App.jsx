import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import Clients from "./Components/ClientsPage/Clients";
import Community from "./Components/CommunityPage/Community";
import Experience from "./Components/ExperiencePage/Experience";
import LocalBusiness from "./Components/LocalBusinessPage/LocalBusiness";
import Designing from "./Components/DesigningPage/Designing";
import Customer from "./Components/CustomerPage/Customer";
import Marketing from "./Components/MarketingPage/Marketing";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <LandingPage />
        <Clients />
        <Community />
        <Experience />
        <LocalBusiness />
        <Designing />
        <Customer />
        <Marketing />
        <Footer />
      </>
    </div>
  );
}

export default App;
