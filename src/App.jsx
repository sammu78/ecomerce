import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Seller from './pages/Seller';
import DetailView from './pages/DetailView';
import Header from './components/Header';
import Footer from './components/Footer';
import DataContextProvider from './context/DataProvider';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="app-container">
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/seller" element={<Seller />} />
              <Route path="/product/:id" element={<DetailView />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
