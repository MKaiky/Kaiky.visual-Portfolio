import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import Contacts from './pages/Contacts';

export default function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projetos/:slug" element={<ProjectPage />} />
    <Route path="*" element={<Home />} />
    <Route path="/contatos" element={<Contacts />} />
  </Routes>;
}
