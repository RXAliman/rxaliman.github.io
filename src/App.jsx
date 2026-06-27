import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import HomePage from './pages/Home/Home'
import LinksPage from './pages/Links/Links'
import NotFoundPage from './pages/NotFound/NotFound'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
