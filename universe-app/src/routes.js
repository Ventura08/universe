import { Header } from './components/Header/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from "./assets/Logotipow.png"
import { PlanetsList } from './pages/Planets/planets';
import { Astronauts } from './pages/Astronauts/astronauts';
import { Home } from './pages/Planets/home';
import video from './assets/earth.mp4';

export function AppRoutes() {
  return (
    <Router>
        <Header image={logo}/>
        <Routes>
          <Route path="/" element={<Home video={video} />} />
          <Route path="/planets" element={<PlanetsList />} />
          <Route path="/astronauts" element={<Astronauts />} />
        </Routes>
    </Router>
  );
}
