import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Term from './pages/Term/Term';
import { HOME, LOGIN, TERM } from './global/routes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={TERM} element={<Term />} />
      </Routes>
    </Router>
  );
}

export default App;
