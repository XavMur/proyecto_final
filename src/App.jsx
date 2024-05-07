import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductView from "./views/ProductView";
import MainView from "./views/mainView";
import LoginProvider from "./context/LoginContext";
import LoginModalView from "./views/LoginModalView";
import { Route, Routes } from "react-router-dom";
import CartView from "./views/CartView";
import PublicationView from "./views/PublicationView";
import ProfileView from "./views/ProfileView";

function App() {
  return (
    <>
      <LoginProvider>
        <LoginModalView />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/product" element={<ProductView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/publication" element={<PublicationView />} />
          <Route path="/profile" element={<ProfileView />} />
        </Routes>
        <Footer />
      </LoginProvider>
    </>
  );
}

export default App;
