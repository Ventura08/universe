import { Header } from './components/Header/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from "./assets/logo.svg"
import { Planets } from './pages/Planets/planets';

export function AppRoutes() {
  return (
    <Router>
        <Header image={logo}/>
        <Routes>
          <Route path="/" element={<Planets/>} />
        </Routes>
    </Router>
  );
}
