import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductView from "./views/ProductView";
import MainView from "./views/mainView";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainView />} />
        <Route path='/product' element={<ProductView />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
