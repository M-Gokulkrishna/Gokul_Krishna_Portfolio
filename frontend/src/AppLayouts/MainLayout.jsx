import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaBars, FaSmile, FaTimes } from 'react-icons/fa';
// 
const MainLayout = ({ screenWidth }) => {
    const NavigateTo = useNavigate();
    const [NavbarFlag, setNavbarFlag] = useState("translate-x-[245px]");
    // 
    return(
        <div className="Main-layout w-full h-full flex flex-col items-center justify-between bg-gray-900 overflow-y-scroll overflow-x-hidden">
            <header className={`Portfolio-Navbar w-full min-h-20 z-[999] flex items-center rounded-bl-4xl rounded-br-4xl text-amber-300 ${(screenWidth<=700)?"justify-center":"justify-between"}`}>
                <span className='absolute left-5 p-1 text-2xl rounded-full ring-3' data-animation="zoom-in"><FaSmile /></span>
                <h1 className='text-2xl font-bold sm:ms-18 tracking-wider' data-animation="fade-down">Portfolio</h1>
                <span className='absolute right-5 text-3xl cursor-pointer active:scale-95 sm:hidden' onClick={() => setNavbarFlag("")}><FaBars /></span>
                <ol className={`flex items-end justify-evenly font-semibold tracking-widest text-[17px] overflow-hidden transition-all duration-500 ease ${(screenWidth<=700)?`absolute right-0 self-start flex-col w-[240px] h-[400px] pe-3 pb-5 ring-2 bg-gray-900 rounded-tl-xl rounded-bl-[85%] ${NavbarFlag}`:"relative gap-x-8 me-5"}`}>
                    <span className='absolute top-5 left-5 z-[99] p-1 text-3xl border-3 rounded-full cursor-pointer active:scale-95 sm:hidden' onClick={() => setNavbarFlag("translate-x-[245px]")}><FaTimes /></span>
                    <li className={`transition-all duration-250 cursor-pointer ${(screenWidth<=700)?"w-full h-12 pe-3 flex items-center justify-end rounded border-e-5 border-amber-400 hover:text-black hover:bg-gradient-to-r hover:to-teal-50":"relative py-2"}`} onClick={() => { NavigateTo("HomePage"); setNavbarFlag("translate-x-[245px]"); }}>Home</li>
                    <li className={`transition-all duration-250 cursor-pointer ${(screenWidth<=700)?"w-full h-12 pe-3 flex items-center justify-end rounded border-e-5 border-amber-400 hover:text-black hover:bg-gradient-to-r hover:to-teal-50":"relative py-2"}`} onClick={() => { NavigateTo("AboutPage"); setNavbarFlag("translate-x-[245px]"); }}>About</li>
                    <li className={`transition-all duration-250 cursor-pointer ${(screenWidth<=700)?"w-full h-12 pe-3 flex items-center justify-end rounded border-e-5 border-amber-400 hover:text-black hover:bg-gradient-to-r hover:to-teal-50":"relative py-2"}`} onClick={() => { NavigateTo("SkillPage"); setNavbarFlag("translate-x-[245px]"); }}>Skill</li>
                    <li className={`transition-all duration-250 cursor-pointer ${(screenWidth<=700)?"w-full h-12 pe-3 flex items-center justify-end rounded border-e-5 border-amber-400 hover:text-black hover:bg-gradient-to-r hover:to-teal-50":"relative py-2"}`} onClick={() => { NavigateTo("ProjectPage"); setNavbarFlag("translate-x-[245px]"); }}>Project</li>
                    <li className={`transition-all duration-250 cursor-pointer ${(screenWidth<=700)?"w-full h-12 pe-3 flex items-center justify-end rounded border-e-5 border-amber-400 hover:text-black hover:bg-gradient-to-r hover:to-teal-50":"relative py-2"}`} onClick={() => { NavigateTo("ContactPage"); setNavbarFlag("translate-x-[245px]"); }}>Contact</li>
                </ol>
            </header>
            <Outlet context={{ NavigateTo, screenWidth }} />
        </div>
    )
}
// 
export default MainLayout;
