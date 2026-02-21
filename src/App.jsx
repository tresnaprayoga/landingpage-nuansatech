import { useRef } from 'react';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import ArticleDetail from './component/artikel/detailartikel';
import ProdukWebsite from './pages/PageProduk';
import ContactSection from './component/contacsection/contacForm';
import OrderForm from './component/formorder/formOrder';
//

import Footer from './component/footer';
import './style/app.css';

function App() {
  const homeRef = useRef(null);
  const produkRef = useRef(null);
  const profilRef = useRef(null);
  const hargaRef = useRef(null);
  return (
    <>
      <header>
        <Navbar homeRef={homeRef} produkRef={produkRef} profilRef={profilRef} hargaRef={hargaRef} />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage homeRef={homeRef} produkRef={produkRef} profilRef={profilRef} hargaRef={hargaRef} />} />
          <Route path='/produk' element={<ProdukWebsite />} />
          <Route path='/articles/:slug' element={<ArticleDetail />} />
          <Route path='/contact' element={<ContactSection />} />
          <Route path='/order' element={<OrderForm />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
