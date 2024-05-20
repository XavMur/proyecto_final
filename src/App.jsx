import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductView from "./views/ProductView";
import mainView from "./views/MainView";
import LoginProvider from "./context/LoginContext";
import LoginModalView from "./views/LoginModalView";
import { Route, Routes } from "react-router-dom";
import CartView from "./views/CartView";
import PublicationView from "./views/PublicationView";
import ProfileView from "./views/ProfileView";
import GridView from "./views/GridView";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <>
      <LoginProvider>
        <CartProvider>
          <LoginModalView />
          <Navbar />
          <Routes>
            <Route path="/" element={<mainView />} />
            <Route path="/product/:id" element={<ProductView />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/publication" element={<PublicationView />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/products/:catId" element={<GridView />} />
          </Routes>
          <Footer />
        </CartProvider>
      </LoginProvider>
    </>
  );
}

export default App;
