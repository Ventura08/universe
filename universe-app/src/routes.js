import { Header } from './components/Header/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from "./assets/Logotipow.png"
import { PlanetsList } from './pages/Planets/planets';
import { Astronauts } from './pages/Astronauts/astronauts';

export function AppRoutes() {
  return (
    <Router>
        <Header image={logo}/>
        <Routes>
          <Route path="/" element={<PlanetsList />} />
          <Route path="/planets" element={<PlanetsList />} />
          <Route path="/astronauts" element={<Astronauts />} />
        </Routes>
    </Router>
  );
}
