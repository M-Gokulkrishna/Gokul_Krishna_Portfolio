import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Project1 from "../assets/Images/ChatOS_Project.png";
import Project2 from "../assets/Images/Skillye_Project.png";
import Project3 from "../assets/Images/College_Project.png";
import Project4 from "../assets/Images/Portfolio_Project.png";
import Project5 from  "../assets/Images/LudoGame_Project.png";
// 
const ProjectList = [
    {
        ProjectName: "ChatOS",
        ProjectLink: "https://github.com/M-Gokulkrishna/ChatOS.git",
        ProjectImage: Project1,
        ProjectDescription: "Visually appealing & feature rich chatting web-application using MERN stack with socket.io to handle over 1000+ concurrent users & ensure seemless real-time message delivery."
    },
    {
        ProjectName: "Skillye",
        ProjectLink: "https://github.com/M-Gokulkrishna/Skillye-webapp.git",
        ProjectImage: Project2,
        ProjectDescription: "Developed a user-friendly web application using the MERN stack, enabling users to create personalized profile cards to effectively showcase their skills and Competencies to others."
    },
    {
        ProjectName: "College Project",
        ProjectLink: import.meta.env.VITE_GITHUB_URL,
        ProjectImage: Project3,
        ProjectDescription: "Developed a web-app to replace traditional paper-based college bus attendance system with the digital solution, which enables Management to effectively handle their bus service to 20% more."
    },
    {
        ProjectName: "Portfolio",
        ProjectLink: import.meta.env.VITE_GITHUB_URL,
        ProjectImage: Project4,
        ProjectDescription: "Designed and Architected a sleek designed portfolio website using React.js with Tailwindcss and Implemented AOS (Animation on Scroll) enables smooth UI navigation."
    },
    {
        ProjectName: "Ludo Game",
        ProjectLink: "https://github.com/M-Gokulkrishna/Ludo-Game-JS.git",
        ProjectImage: Project5,
        ProjectDescription: "Interactive and funny Ludo Game using HTML, CSS and JavaScipt. Logically programmed and designed game structure, players movement and animations are provides seemless gaming experience."
    }
];
const SlideWidth = 300;
const SlideOffset = 60;
const SlideHeight = 400;
// 
const ProjectPage = () => {
    const carouselCountRef = useRef(1);
    const { screenWidth } = useOutletContext();
    const [carouselDebounce, setCarouselDebounce] = useState(true);
    const [carouselAutoMovement, setCarouselAutoMovement] = useState(true);
    const [slideTrackMovement, setSlideTrackMovement] = useState((SlideWidth + SlideOffset));
    const carouselSlides = [ProjectList[ProjectList.length - 1], ...ProjectList, ProjectList[0]];
    const [slidesTrackTransition, setSlidesTrackTransition] = useState("transform 0.6s ease-in-out");
    // carousel Auto Movement
    useEffect(() => {
        if (carouselAutoMovement) {
            const carouselAutoTimer = setInterval(() => {
                nextSlide();
            }, 1800);
            return () => {
                clearInterval(carouselAutoTimer);
            }
        }
    }, [carouselAutoMovement]);
    // 
    function previousSlide() {
        if (!carouselDebounce) return;
        setCarouselDebounce(false);
        carouselCountRef.current -= 1;
        setSlidesTrackTransition("transform 0.6s ease-in-out");
        if (carouselCountRef.current === 0) {
            setSlideTrackMovement((SlideWidth * carouselCountRef.current) + (SlideOffset * carouselCountRef.current));
            carouselCountRef.current = (carouselSlides.length - 2);
            setTimeout(() => {
                setCarouselDebounce(true);
                setSlidesTrackTransition("none");
                setSlideTrackMovement((SlideWidth * carouselCountRef.current) + (SlideOffset * carouselCountRef.current));
            }, 550);
            return;
        }
        setTimeout(() => {
            setCarouselDebounce(true);
        }, 550);
        setSlideTrackMovement((SlideWidth * carouselCountRef.current) + (SlideOffset * carouselCountRef.current));
    }
    // 
    function nextSlide() {
        if (!carouselDebounce) return;
        setCarouselDebounce(false);
        carouselCountRef.current += 1;
        setSlidesTrackTransition("transform 0.6s ease-in-out");
        if (carouselCountRef.current === (carouselSlides.length - 1)) {
            setSlideTrackMovement((SlideWidth * carouselCountRef.current) + (SlideOffset * carouselCountRef.current));
            carouselCountRef.current = 1;
            setTimeout(() => {
                setCarouselDebounce(true);
                setSlidesTrackTransition("none");
                setSlideTrackMovement((SlideWidth * carouselCountRef.current) + (SlideOffset * carouselCountRef.current));
            }, 550);
            return;
        }
        setTimeout(() => {
            setCarouselDebounce(true);
        }, 550);
        setSlideTrackMovement((SlideWidth * carouselCountRef.current) + (SlideOffset * carouselCountRef.current));
    }
    // 
    return (
        <div className={`relative w-[90%] min-h-[500px] m-auto flex items-center justify-center tracking-wide rounded-4xl overflow-hidden ${(screenWidth)}`}>
            <div style={{ width: `${SlideWidth}px`, height: `${SlideHeight}px` }}>
                <div className={`flex gap-x-15 bg-red-30`} style={{ width: `${(SlideWidth * carouselSlides.length)}px`, height: `${SlideHeight}px`, transition: slidesTrackTransition, transform: `translateX(-${slideTrackMovement}px)` }}>
                    {
                        carouselSlides.map((eachSlide, id) => (
                            <div className="relative flex flex-col min-w-[300px] h-[400px] rounded-4xl ring-4 ring-offset-8 ring-offset-gray-900 ring-amber-300 overflow-hidden shadow-2xl shadow-amber-900 bg-amber-500" key={id} data-animation="zoom-in" >
                                <div className="w-full h-[190px] flex bg-amber-500">
                                    <img src={eachSlide.ProjectImage} alt="" className="size-[164px] scale-x-115 rounded-lg ring-4 ring-gray-900 m-auto" />
                                </div>
                                <div className="relative w-full h-[210px] flex flex-col items-center justify-evenly rounded-t-[40px] bg-amber-200" style={{ boxShadow: "0 0 100px #000" }}>
                                    <h1 className="text-xl scale-y-110 tracking-wider font-bold">{eachSlide.ProjectName}</h1>
                                    <p className="text-[12px] scale-y-115 px-5 text-justify font-semibold">{eachSlide.ProjectDescription}</p>
                                    <a href={eachSlide.ProjectLink} target="_blank" rel="noopener noreferrer" className="gokUI-btn warning text-lg" style={{ width: "90%" }}>Github</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <button className="absolute left-1.5 w-10 h-10 flex items-center justify-center rounded-l-4xl rounded outline-0 text-4xl font-bold shadow-xl opacity-90 cursor-pointer active:scale-95 bg-white" onClick={() => { previousSlide(); setCarouselAutoMovement(false) }}>
                <FaAngleLeft />
            </button>
            <button className="absolute right-1.5 w-10 h-10 flex items-center justify-center rounded-r-4xl rounded outline-0 text-4xl font-bold shadow-xl opacity-90 cursor-pointer active:scale-95 bg-white" onClick={() => { nextSlide(); setCarouselAutoMovement(false) }}>
                <FaAngleRight />
            </button>
        </div>
    )
}
// 
export default ProjectPage;
