import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductView from "./views/ProductView";

function App() {
  return (
    <>
      <Navbar />
      <ProductView />
      <Footer />
    </>
  );
}

export default App;
