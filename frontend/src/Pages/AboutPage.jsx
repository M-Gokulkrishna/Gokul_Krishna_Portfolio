import { FaGraduationCap } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
// 
const AboutPage = () => {
    const { screenWidth } = useOutletContext();
    return(
        <div className={`h-[82%] self-end p-2 flex items-center font-bold tracking-wide border-5 border-amber-300 rounded-2xl ${(screenWidth<=960)?"flex-col":""} ${(screenWidth<=500)?"mb-4 w-[95%]":"mb-3 w-[90%]"}`}>
            <section className={`relative flex flex-col items-center justify-center py-5 gap-y-4 rounded-xl bg-amber-300 ${(screenWidth<=960)?"w-full min-h-[50%]":"max-w-[50%] h-full"}`}>
                <a href={import.meta.env.VITE_LINKEDIN_URL} className="absolute top-2.5 right-2 underline underline-offset-2 me-4 text-sky-800 active:scale-95" target="_blank" rel="noopener noreferrer" data-animation="zoom-out-left">LinkedIn</a>
                <span className="w-auto h-auto p-3 rounded-full text-8xl shadow-2xl ring-5 bg-cyan-300" data-animation="zoom-in"><FaGraduationCap /></span>
                <h1 className="text-sm sm:text-[16px] text-justify px-5 sm:px-15" data-animation="fade-up">
                    An aspiring and passionate MERN stack web developer. 
                    Specialize in building and designing a Responsive and visually appealing websites in various technologies such as 
                    JavaScript, React.js, Node.js, MongoDB, Express.js and tailwind css.
                </h1>
            </section>
            <section className={`flex items-center justify-evenly ${(screenWidth<=700)?"flex-col w-full h-[50%]":(screenWidth>700 && screenWidth<=960)?"flex-row w-full h-[50%] gap-x-3":"flex-col w-[50%] h-full"}`}>
                <div className="w-[100%] sm:w-[400px] min-h-[80px] sm:h-[100px] flex flex-col justify-evenly px-3 rounded-md border-l-5 border-r-5 shadow-2xl border-amber-300 text-amber-100">
                    <h3 className="text-lg lg:text-xl text-amber-300" data-animation="fade-up" style={{ "--gokAOS-Delay": "0.3s" }}>Full stack web development</h3>
                    <h4 className="font-semibold" data-animation="fade-up" style={{ "--gokAOS-Delay": "0.6s" }}>Nxtwave CCBP 4.0 --(Online)--</h4>
                    <p className="font-semibold" data-animation="fade-up" style={{ "--gokAOS-Delay": "0.9s" }}>2022 - Pesent</p>
                </div>
                <div className="w-[100%] sm:w-[400px] min-h-[80px] sm:h-[100px] flex flex-col justify-evenly px-3 rounded-md border-l-5 border-r-5 shadow-2xl border-amber-300 text-amber-100">
                    <h3 className="text-lg lg:text-xl text-amber-300" data-animation="fade-up" style={{ "--gokAOS-Delay": "0.3s" }}>BE. Mechatronics</h3>
                    <h4 className="text-sm font-semibold" data-animation="fade-up" style={{ "--gokAOS-Delay": "0.6s" }}>Mahendra Engineering College, Namakkal</h4>
                    <p className="flex items-center justify-between w-full font-semibold" data-animation="fade-up" style={{ "--gokAOS-Delay": "0.9s" }}>
                        <span>CGPA: 9.04 / 10</span>
                        <span className="me-2.5">2020 - 2024</span>
                    </p>
                </div>
            </section>
        </div>
    )
}
// 
export default AboutPage;
