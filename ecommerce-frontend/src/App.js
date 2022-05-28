import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Header } from "./Components/Header";
import Product from "./Components/Product";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails";
import NavCart from "./Components/NavCart";
import Cart from "./Components/Cart";
import SignIn from "./Components/SignIn";
import WishList from "./Components/WishList";
import Compare from "./Components/Compare";
import Shipping from "./Components/Shipping";
import Registration from "./Components/Registration";
import PlaceOrder from "./Components/PlaceOrder";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from "./Components/Payment";
import Order from "./Components/Order.jsx";
import Dashboard from "./Components/Dashboard";
import Vandor from "./Components/Vandor";



function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer
      position="bottom-left"
      limit={1}
      autoClose={3000}
    />
    <Header/>
    <Cart/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product" element={<Product />}/>  
        <Route path="/product/:slug" element={<ProductDetails />}/>    
        <Route path="/navCart" element={<NavCart />}/>    
        <Route path="/signin" element={<SignIn />}/>    
        <Route path="/signup" element={<Registration />}/>    
        <Route path="/wishList" element={<WishList />}/>    
        <Route path="/compare" element={<Compare />}/>    
        <Route path="/shipping" element={<Shipping />}/>    
        <Route path="/payment" element={<Payment />}/>    
        <Route path="/placeholder" element={<PlaceOrder />}/>    
        <Route path="/orders/:id" element={<Order />}/>    
        <Route path="/dashboard" element={<Dashboard />}/>    
        <Route path="/vandor" element={<Vandor />}/>    
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;