import HomePage from './pages/HomePage';
import Navbar from './component/navbar';
import InfoPromo from './component/InfoPromo';
import Footer from './component/footer';
import './style/app.css';

function App() {
  return (
    <>
      <header>
        <InfoPromo />
        <Navbar />
      </header>
      <main>
        <HomePage />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
