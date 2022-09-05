import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test/test';
import Login from './pages/Login/Login';
import { HOME, LOGIN, TERM } from './global/routes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={TERM} element={<TERM />} />
      </Routes>
    </Router>
  );
}

export default App;
