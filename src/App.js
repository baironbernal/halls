import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import RouteConfig from './routes/RouteConfig';
import './styles/app.css';

import Footer from './layout/footer/Footer';
import Navbar from './layout/navbar/Navbar';
import { ContextGlobal } from './context/ContextGlobal';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <ContextGlobal>
          <RouteConfig />
        </ContextGlobal>
      </main>
      <Footer />
  </Router>
  );
}

export default App;
