import About from './pages/About';
import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';
import Career from './pages/Career';

const pages: Record<string, React.FC> = {
  '/': Home,
  '/about': About,
  '/career': Career,
};

export default function App() {
  const { pathname } = window.location;
  const Pages = Reflect.get(pages, pathname) || Home;

  return (
    <>
      <Header />
      <main>
        <Pages />
      </main>
      <Footer />
    </>
  );
}
