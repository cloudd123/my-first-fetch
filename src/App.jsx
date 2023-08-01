import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import AnotherComponent from './pages/AnotherComponent';
import Navbar from './components/Navbar';
import ProductDetails from './pages/ProductDetails';
import ContactDetails from './pages/ContactDetails';

function App() {
  return (
      <div className='main'>
        <Navbar />

        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/users" element={<AnotherComponent />} />
          <Route path='/user/:userId' element={<ContactDetails />} />
        </Routes>
      </div>
  
  );
}

export default App;
