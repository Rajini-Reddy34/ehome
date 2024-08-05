import './App.css';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import ConfirmOrder from'./pages/ConfirmOrder';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import ProductsList from './pages/ProductsList';
import Signup from './pages/Signup';

const App = () => {
  return (
    
     <Routes>
      <Route path="/" element={<ProductsList/>} />
      <Route path="/products/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/signin" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/contactUs" element={<ContactUs/>} />
      <Route path="/placeorder" element={<PlaceOrder/>} />
      <Route path='/confirmorder' element={<ConfirmOrder/>} />
      
      </Routes>
      
  );
}

export default App;