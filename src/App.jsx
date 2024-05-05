import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductView from "./views/ProductView";
import MainView from "./views/mainView";

function App() {
  return (
    <>
      <Navbar />
      <MainView />
      <Footer />
    </>
  );
}

export default App;
