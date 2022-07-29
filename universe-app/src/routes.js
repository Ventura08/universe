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
          <Route path="/dashboard" element={<p>Serviço indisponível</p>} />
          <Route path="/galerry" element={<p>Serviço indisponível</p>} />
        </Routes>
    </Router>
  );
}
