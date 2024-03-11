import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import RouteConfig from './routes/RouteConfig';
import './styles/app.css';

import Footer from './layout/footer/Footer';
import Navbar from './layout/navbar/Navbar';
import { ContextGlobal } from './context/ContextGlobal';
import TagManager from 'react-gtm-module';

import ReactPixel from 'react-facebook-pixel';
import TiktokPixel from 'tiktok-pixel';

const options = {
  autoConfig: true,  // set pixel's autoConfig
  debug: false,      // enable logs
};

const tagManagerArgs = {
  gtmId: 'GTM-T3XC98ZF', // Replace with your GTM container ID
};


ReactPixel.init('297632581115526', options);
TiktokPixel.init('CNLI7I3C77UA3TGJ8OPG');
TagManager.initialize(tagManagerArgs);

TagManager.dataLayer({
  dataLayer: {
    event: 'pageview', // Event name
    page: {
      path: '/peru/',
      title: 'Mma'
    }
  },
});


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
