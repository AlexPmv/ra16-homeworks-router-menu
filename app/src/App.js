import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import DriftPage from './Components/DriftPage';
import ForzaPage from './Components/ForzaPage';
import TimeAttackPage from './Components/TimeAttackPage';
import Menu from './Components/Menu';

export default function App() {

   
  return (
    <Router >
      <div>
        <Menu />
        <Routes className="page">
          <Route path="/" exact element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </Router>
  );
}