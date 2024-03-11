import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';
import Career from './pages/Career';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/career' element={<Career />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
