import './App.css';
import React, { FC, FunctionComponent, Suspense, lazy, useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
const Page01 = lazy(() => import('./Page01'));
const Page02 = lazy(() => import('./Page02'));
const Home = () => {
  return (
    <div className="content">
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
}
const DelayedComponent = ({ children }: any) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return isLoaded ? children : <div className='content'>Loading...</div>;
};


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
      <Suspense>
        <Routes>
          <Route path="/page01" element={<DelayedComponent><Page01 /></DelayedComponent>} />
          <Route path="/page02" element={<DelayedComponent><Page02 /></DelayedComponent>} /> 
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
