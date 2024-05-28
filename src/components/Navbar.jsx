import { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

import logo from '../assets/logo.png';
import search from '../assets/search.svg';
import Avatar from './Avatar';
import { setCurrentUser } from '../components/actions/currentUser';

const Navbarc = () => {
  const dispatch = useDispatch();
  var User = useSelector(state => state.currentUserReducer);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
    dispatch(setCurrentUser(null));
  };
  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decoderToken = jwtDecode(token);
      if (decoderToken.exp * 1000 < new Date().getTiime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
  }, [dispatch]);

  return (
    <nav className="main-nav">
      <Navbar bg="rgb(21, 222, 6)" variant="dark" expand="lg">
        <Container className="navbar">
          <Navbar.Brand href="#home">
            <Link to="/" className="nav-item nav-logo">
              <img src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <form>
            <input type="text" placeholder="Srch" />
            <img className="search-icon" src={search} alt="Search" width="18" />
          </form>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="nav-item">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {User === null ? (
        <Link to="/auth" className="nav-item nav-link">
          Login
        </Link>
      ) : (
        <>
          <Avatar
            backgroundColor="yellow"
            px="10px"
            py="7px"
            borderRedious="50%"
            color="red"
          >
            <Link
              to="/Profile"
              className="avatar"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              S
            </Link>
          </Avatar>

          <button className="nav-item nav-link" onClick={handleLogout}>
            Log out
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbarc;
