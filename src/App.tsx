import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Page01 } from './Page01';
import { Page02 } from './Page02';
const Home = () => {
  return (
    <div className="content">
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
}
const App = () => {
  return (
    <Router>
      <nav className='navBar'>
        <ul className='navBar__list-link'>
          <li>
            <Link className='navBar__link' to="/page01">Página 1</Link>
          </li>
          <li>
            <Link className='navBar__link' to="/page02">Página 2</Link>
          </li>
          <li>
            <Link className='navBar__link' to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/page01" element={<Page01 />} />
        <Route path="/page02" element={<Page02 />} /> 
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
