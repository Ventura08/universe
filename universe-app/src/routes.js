import { Header } from './components/Header/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from "./assets/logo.svg"
import { Planets, PlanetsList } from './pages/Planets/planets';

export function AppRoutes() {
  return (
    <Router>
        <Header image={logo}/>
        <Routes>
          <Route path="/" element={<PlanetsList/>} />
          <Route path="/planets" element={<p>Migrar planetas pra cá depois</p>} />
          <Route path="/astronauts" element={<p>Astronautas aq</p>} />
        </Routes>
    </Router>
  );
}
