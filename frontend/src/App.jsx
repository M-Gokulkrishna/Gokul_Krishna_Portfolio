import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import SkillPage from './Pages/SkillPage';
import { useEffect, useState } from 'react';
import ProjectPage from './Pages/ProjectPage';
import ContactPage from './Pages/ContactPage';
import { ToastContainer } from 'react-toastify';
import MainLayout from './AppLayouts/MainLayout';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// 
const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, [screenWidth]);
  // 
  return (
    <div className='App relative w-dvw h-dvh flex flex-col items-center overflow-hidden'>
      <div className='absolute z-[1000]'>
        <ToastContainer position='top-center' autoClose={2000} />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout screenWidth={screenWidth} />}>
            <Route index element={<Navigate to={"HomePage"} replace />} />
            <Route path='HomePage' element={<HomePage />} />
            <Route path='AboutPage' element={<AboutPage />} />
            <Route path='SkillPage' element={<SkillPage />} />
            <Route path='ProjectPage' element={<ProjectPage />} />
            <Route path='ContactPage' element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
// 
export default App;