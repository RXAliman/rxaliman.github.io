import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';

import HomePage from './pages/Home/Home'
import LinksPage from './pages/Links/Links'
import ProjectsPage from './pages/Projects/Projects'
import ProjectDetail from './pages/Projects/ProjectDetail'
import NotFoundPage from './pages/NotFound/NotFound'
import PageWrapper from './components/PageWrapper/PageWrapper'

import useSmoothScroll from './hooks/useSmoothScroll'

import './App.css'

export const ThemeContext = createContext();

const App = () => {
  useSmoothScroll();

  const [isLightMode, setIsLightMode] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'light';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
      if (isLightMode) {
        document.body.classList.add('lightMode');
      } else {
        document.body.classList.remove('lightMode');
      }
    } catch (e) {}
  }, [isLightMode]);

  return (
    <ThemeContext.Provider value={{ isLightMode, setIsLightMode }}>
      <BrowserRouter>
        <Routes>
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={
            <PageWrapper>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/links" element={<LinksPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </PageWrapper>
          } />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
