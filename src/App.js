import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import RouteConfig from './routes/RouteConfig';
import './styles/app.css';

import Footer from './layout/footer/Footer';
import Navbar from './layout/navbar/Navbar';
import { ContextGlobal } from './context/ContextGlobal';

import ReactPixel from 'react-facebook-pixel';
import TiktokPixel from 'tiktok-pixel';


const options = {
  autoConfig: true,  // set pixel's autoConfig
  debug: false,      // enable logs
};

ReactPixel.init('422122783599444', options);
TiktokPixel.init('CNL376RC77U9NURUN5L0');

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
