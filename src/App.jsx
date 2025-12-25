import HomePage from './pages/HomePage';
import InfoPromo from './component/InfoPromo';
import Footer from './component/footer';
import './style/app.css';

function App() {
  return (
    <>
      <header>
        <InfoPromo />
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
