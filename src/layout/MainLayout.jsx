import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {

  return (
    <div>
      <Navbar />
      <div className="mt-24">{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
