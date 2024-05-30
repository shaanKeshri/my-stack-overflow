import './App.css';
// eslint-disable-next-line no-unused-vars
import { HashRouter } from 'react-router-dom';
import Navbarc from './components/Navbar';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbarc />
        <AllRoutes />
      </HashRouter>
    </div>
  );
}

export default App;
