/**
 * App.jsx — Root with React Router + Netflix page flow.
 * Flow: Intro → Profiles → Browse (with sub-pages)
 * Profile selection is stored in context for cross-page access.
 * setStage exposed so navbar can switch back to profile picker.
 */

import { useState, useCallback, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import IntroScreen from './pages/IntroScreen';
import ProfilePicker from './pages/ProfilePicker';
import Browse from './pages/Browse';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ProfessionalPage from './pages/ProfessionalPage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';
import MusicPage from './pages/MusicPage';
import ReadingPage from './pages/ReadingPage';
import BlogsPage from './pages/BlogsPage';

// Context for selected profile + stage control
export const ProfileContext = createContext(null);
export const SetStageContext = createContext(null);
export const useProfile = () => useContext(ProfileContext);
export const useSetStage = () => useContext(SetStageContext);

function App() {
  const [stage, setStage] = useState('intro'); // intro | profiles | app
  const [profile, setProfile] = useState('recruiter');

  const handleIntroComplete = useCallback(() => setStage('profiles'), []);
  const handleProfileSelect = useCallback((id) => {
    setProfile(id);
    setStage('app');
  }, []);

  // Show intro overlay
  if (stage === 'intro') {
    return <IntroScreen onComplete={handleIntroComplete} />;
  }

  // Show profile picker overlay
  if (stage === 'profiles') {
    return <ProfilePicker onSelect={handleProfileSelect} />;
  }

  // Main app with routing
  return (
    <ProfileContext.Provider value={profile}>
      <SetStageContext.Provider value={setStage}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/browse" replace />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/professional" element={<ProfessionalPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/reading" element={<ReadingPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="*" element={<Navigate to="/browse" replace />} />
          </Routes>
        </BrowserRouter>
      </SetStageContext.Provider>
    </ProfileContext.Provider>
  );
}

export default App;
