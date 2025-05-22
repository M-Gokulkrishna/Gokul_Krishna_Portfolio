import { useOutletContext } from 'react-router-dom';
import ProfilePic from '../assets/Images/Profile_Pic.jpg';
import ResumeFile from '../assets/Files/Gokul_Krishna_Resume.pdf';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';
// 
const HomePage = () => {
    const { NavigateTo, screenWidth } = useOutletContext();
    const [TextAnimationFlag, setTextAnimationFlag] = useState(false);
    useEffect(() => {
        const TextAnimationTimer = setTimeout(() => {
            setTextAnimationFlag(true);
        }, 3000);
        return () => {
            clearTimeout(TextAnimationTimer);
        }
    }, []);
    // 
    return(
        <div className={`relative w-[90%] h-[85%] min-w-[280px] self-end flex items-center justify-between font-semibold tracking-wider ${(screenWidth<=700)?"flex-col":""}`}>
            <section className={`flex items-center justify-center ${(screenWidth<=700)?"w-full min-h-[50%]":"min-w-[40%] h-full"}`}>
                <img src={ProfilePic} alt="#profilePic" data-animation={`${(screenWidth<=700)?"zoom-in":"fade-right"}`} className='w-50 h-65 sm:w-57.5 sm:h-75 mt-4 sm:mt-0 ring-5 ring-offset-5 ring-offset-black ring-amber-300 shadow-2xl rounded-full' style={{ "--gokAOS-Duration": "1.8s" }} />
            </section>
            <section className={`flex flex-col items-start justify-center gap-y-3 ms-3 sm:ms-10 text-amber-100 ${(screenWidth<=700)?"w-full min-h-[50%]":"min-w-[60%] h-full"}`}>
                <h1 className='text-[26px]' data-animation="fade-up" style={{ "--gokAOS-Delay": "0.3s" }}>Hello, Everyone!</h1>
                <h2 className='text-2xl font-bold tracking-widest' data-animation={(TextAnimationFlag)?"Text-Typing-Effect":"fade-up"} style={{ "--gokAOS-Delay": "0.6s" }}>I'm <span className='text-amber-300'>Gokul Krishna-M</span></h2>
                <h3 className='text-md sm:text-lg sm:w-[80%]' data-animation="fade-up" style={{ "--gokAOS-Delay": "0.9s" }}>This is my official portfolio website to showcase my works related to my skills.</h3>
                <div className='w-full h-auto flex items-center gap-x-6 sm:mt-1'>
                    <button className="gokUI-btn custom bg-amber-300 border-amber-600" data-animation="zoom-in" style={{ "--gokAOS-Delay": "1s" }}><a href={ResumeFile} download className='font-bold text-gray-900'>Resume</a></button>
                    <div className='flex gap-x-6'>
                        <span className='w-8 h-8 ring-3 ring-amber-300 text-xl scale-110 rounded-full active:scale-105 text-amber-300' data-animation="fade-left" style={{ "--gokAOS-Delay": "1.1s" }}>
                            <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer" className='flex w-full h-full'><FaGithub className='m-auto' /></a>
                        </span>
                        <span className='w-8 h-8 ring-3 ring-amber-300 text-xl scale-110 rounded-full active:scale-105 text-amber-300' data-animation="fade-left" style={{ "--gokAOS-Delay": "1.3s" }}>
                            <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className='flex w-full h-full'><FaLinkedin className='m-auto' /></a>
                        </span>
                        <span className='flex w-8 h-8 ring-3 ring-amber-300 text-xl scale-110 rounded-full cursor-pointer active:scale-105 text-amber-300' data-animation="fade-left" style={{ "--gokAOS-Delay": "1.5s" }} onClick={() => NavigateTo("/ContactPage")}>
                            <FaEnvelope className='m-auto' />
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}
// 
export default HomePage;
