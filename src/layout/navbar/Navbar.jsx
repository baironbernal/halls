import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useFolderRoot from '../../hooks/useFolderRoot';
import './Navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Navbar2() {
  const publicURL = process.env.PUBLIC_URL;
  const {navbar} = useFolderRoot();

  return (
  
<Navbar expand="lg" className="bg-body-tertiary p-0" style={{ 
      backgroundImage: `url('${publicURL + navbar.background}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <Container>
        <Navbar.Brand>
          <Link to={'/'}>  
            <img src={publicURL + "/images/logos/halls.png"} 
            alt="Halls Logo" 
            className="d-inline-block align-text-top" /> 
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="collapseHalls" />
        <Navbar.Collapse id="collapseHalls" className='collapse navbar-collapse flex-row-reverse'>
          <Nav className="d-flex justify-content-center align-items-center navbar-nav m-0 p-0 h-100 gap-5">
          {navbar['list'] && Object.entries(navbar['list']).map(([link, imgUrl]) => (
                    <li className="nav-item" key={link + 1}>
                        <Link to={link} className="nav-link mx-3">
                            <img src={publicURL + imgUrl} alt={link} />
                        </Link>
                    </li>
                ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;