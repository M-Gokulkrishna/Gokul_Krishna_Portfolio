import { useOutletContext } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaCss3, FaGithub, FaNodeJs, FaNode, FaDatabase, FaConnectdevelop } from "react-icons/fa";
// 
const SkillPage = () => {
    const { screenWidth } = useOutletContext();
    // 
    return(
        <div className={`w-[90%] min-h-[500px] m-auto grid px-2 py-10 gap-x-5 gap-y-10 place-items-center font-bold overflow-y-scroll ${(screenWidth<=520)?"grid-cols-1 gap-y-18":(screenWidth<=780)?"grid-cols-2":(screenWidth<=1080)?"grid-cols-3":"grid-cols-4"}`}>
            <div className={`relative min-w-[210px] h-[60px] flex items-center justify-end rounded-t-md rounded-bl-4xl rounded-br-md shadow-xl bg-amber-300 hover:scale-105 ${(screenWidth<=520)?"scale-y-122 scale-x-124":""} `} data-animation="zoom-in-up" style={{ "--gokAOS-Delay": "0.3s" }}>
                <span className="absolute -left-2 -top-5 w-[80px] h-[80px] grid place-items-center text-4xl rounded-full border-4 text-amber-300 bg-gray-900">
                    <FaHtml5 />
                </span>
                <div className="me-2.5">
                    <p className="text-lg">HTML</p>
                    <span  className="flex items-center">
                        <div className="skills-meterTag meter-90 relative min-w-[80px] h-2 rounded overflow-hidden bg-gray-900"></div>
                        <span className="mb-1">&ensp; 90%</span>
                    </span>
                </div>
            </div>
            <div className={`relative min-w-[210px] h-[60px] flex items-center justify-end rounded-t-md rounded-bl-4xl rounded-br-md shadow-xl bg-amber-300 hover:scale-105 ${(screenWidth<=520)?"scale-y-122 scale-x-124":""} `} data-animation="zoom-in-up" style={{ "--gokAOS-Delay": "0.3s" }}>
                <span className="absolute -left-2 -top-5 w-[80px] h-[80px] grid place-items-center text-4xl rounded-full border-4 text-amber-300 bg-gray-900">
                    <FaCss3Alt />
                </span>
                <div className="me-2.5">
                    <p className="text-lg">CSS</p>
                    <span className="flex items-center">
                        <div className="skills-meterTag meter-90 relative min-w-[80px] h-2 rounded overflow-hidden bg-gray-900"></div>
                        <span>&ensp; 90%</span>
                    </span>
                </div>
            </div>
            <div className={`relative min-w-[210px] h-[60px] flex items-center justify-end rounded-t-md rounded-bl-4xl rounded-br-md shadow-xl bg-amber-300 hover:scale-105 ${(screenWidth<=520)?"scale-y-122 scale-x-124":""} `} data-animation="zoom-in-up" style={{ "--gokAOS-Delay": "0.3s" }}>
                <span className="absolute -left-2 -top-5 w-[80px] h-[80px] grid place-items-center text-4xl rounded-full border-4 text-amber-300 bg-gray-900">
                    <FaJsSquare />
                </span>
                <div className="me-2.5">
                    <p className="text-lg">JavaScript</p>
                    <span className="flex items-center">
                        <div className="skills-meterTag meter-90 relative min-w-[80px] h-2 rounded overflow-hidden bg-gray-900"></div>
                        <span>&ensp; 90%</span>
                    </span>
                </div>
            </div>
            <div className={`relative min-w-[210px] h-[60px] flex items-center justify-end rounded-t-md rounded-bl-4xl rounded-br-md shadow-xl bg-amber-300 hover:scale-105 ${(screenWidth<=520)?"scale-y-122 scale-x-124":""} `} data-animation="zoom-in-up" style={{ "--gokAOS-Delay": "0.3s" }}>
                <span className="absolute -left-2 -top-5 w-[80px] h-[80px] grid place-items-center text-4xl rounded-full border-4 text-amber-300 bg-gray-900">
                    <FaCss3 />
                </span>
                <div className="me-2.5">
                    <p className="text-lg">Tailwind CSS</p>
                    <span className="flex items-center">
                        <div className="skills-meterTag meter-80 relative min-w-[80px] h-2 rounded overflow-hidden bg-gray-900"></div>
                        <span>&ensp; 80%</span>
                    </span>
                </div>
            </div>
            <div className={`relative min-w-[210px] h-[60px] flex items-center justify-end rounded-t-md rounded-bl-4xl rounded-br-md shadow-xl bg-amber-300 hover:scale-105 ${(screenWidth<=520)?"scale-y-122 scale-x-124":""} `} data-animation="zoom-in-up" style={{ "--gokAOS-Delay": "0.3s" }}>
                <span className="absolute -left-2 -top-5 w-[80px] h-[80px] grid place-items-center text-4xl rounded-full border-4 text-amber-300 bg-gray-900">
                    <FaGithub />
                </span>
                <div className="me-2.5">
                    <p className="text-lg">Git</p>
                    <span className="flex items-center">
                        <div className="skills-meterTag meter-70 relative min-w-[80px] h-2 rounded overflow-hidden bg-gray-900"></div>
                        <span>&ensp; 70%</span>
                    </span>
                </div>
            </div>
            <div className={`relative min-w-[210px] h-[60px] flex items-center justify-end rounded-t-md rounded-bl-4xl rounded-br-md shadow-xl bg-amber-300 hover:scale-105 ${(screenWidth<=520)?"scale-y-122 scale-x-124":""} `} data-animation="zoom-in-up" style={{ "--gokAOS-Delay": "0.3s" }}>
                <span className="absolute -left-2 -top-5 w-[80px] h-[80px] grid place-items-center text-4xl rounded-full border-4 text-amber-300 bg-gray-900">
                    <FaReact />
                </span>
                <div className="me-2.5">
                    <p className="text-lg">React js</p>
                    <span className="flex items-center">
                        <div className="skills-meterTag meter-90 relative min-w-[80px] h-2 rounded overflow-hidden bg-gray-900"></div>
                        <span>&ensp; 90%</span>
                    </span>
                </div>
            </div>
            <div className={`relative min-w-[210px] h-[60px] flex items-center justify-end rounded-t-md rounded-bl-4xl rounded-br-md shadow-xl bg-amber-300 hover:scale-105 ${(screenWidth<=520)?"scale-y-122 scale-x-124":""} `} data-animation="zoom-in-up" style={{ "--gokAOS-Delay": "0.3s" }}>
                <span className="absolute -left-2 -top-5 w-[80px] h-[80px] grid place-items-center text-4xl rounded-full border-4 text-amber-300 bg-gray-900">
                    <FaNode />
                </span>
                <div className="me-2.5">
                    <p className="text-lg">Node js</p>
                    <span className="flex items-center">
                        <div className="skills-meterTag meter-80 relative min-w-[80px] h-2 rounded overflow-hidden bg-gray-900"></div>
                        <span>&ensp; 80%</span>
                    </span>
                </div>
            </div>
            <div className={`relative min-w-[210px] h-[60px] flex items-center justify-end rounded-t-md rounded-bl-4xl rounded-br-md shadow-xl bg-amber-300 hover:scale-105 ${(screenWidth<=520)?"scale-y-122 scale-x-124":""} `} data-animation="zoom-in-up" style={{ "--gokAOS-Delay": "0.3s" }}>
                <span className="absolute -left-2 -top-5 w-[80px] h-[80px] grid place-items-center text-4xl rounded-full border-4 text-amber-300 bg-gray-900">
                    <FaNodeJs />
                </span>
                <div className="me-2.5">
                    <p className="text-lg">Express js</p>
                    <span className="flex items-center">
                        <div className="skills-meterTag meter-80 relative min-w-[80px] h-2 rounded overflow-hidden bg-gray-900"></div>
                        <span>&ensp; 80%</span>
                    </span>
                </div>
            </div>
            <div className={`relative min-w-[210px] h-[60px] flex items-center justify-end rounded-t-md rounded-bl-4xl rounded-br-md shadow-xl bg-amber-300 hover:scale-105 ${(screenWidth<=520)?"scale-y-122 scale-x-124":""} `} data-animation="zoom-in-up" style={{ "--gokAOS-Delay": "0.3s" }}>
                <span className="absolute -left-2 -top-5 w-[80px] h-[80px] grid place-items-center text-4xl rounded-full border-4 text-amber-300 bg-gray-900">
                    <FaDatabase />
                </span>
                <div className="me-2.5">
                    <p className="text-lg">MongoDB</p>
                    <span className="flex items-center">
                        <div className="skills-meterTag meter-80 relative min-w-[80px] h-2 rounded overflow-hidden bg-gray-900"></div>
                        <span>&ensp; 80%</span>
                    </span>
                </div>
            </div>
            <div className={`relative min-w-[210px] h-[60px] flex items-center justify-end rounded-t-md rounded-bl-4xl rounded-br-md shadow-xl bg-amber-300 hover:scale-105 ${(screenWidth<=520)?"scale-y-122 scale-x-124":""} `} data-animation="zoom-in-up" style={{ "--gokAOS-Delay": "0.3s" }}>
                <span className="absolute -left-2 -top-5 w-[80px] h-[80px] grid place-items-center text-4xl rounded-full border-4 text-amber-300 bg-gray-900">
                    <FaReact />
                </span>
                <div className="me-2.5">
                    <p className="text-lg">React Redux</p>
                    <span className="flex items-center">
                        <div className="skills-meterTag meter-80 relative min-w-[80px] h-2 rounded overflow-hidden bg-gray-900"></div>
                        <span>&ensp; 80%</span>
                    </span>
                </div>
            </div>
            <div className={`relative min-w-[210px] h-[60px] flex items-center justify-end rounded-t-md rounded-bl-4xl rounded-br-md shadow-xl bg-amber-300 hover:scale-105 ${(screenWidth<=520)?"scale-y-122 scale-x-124":""} `} data-animation="zoom-in-up" style={{ "--gokAOS-Delay": "0.3s" }}>
                <span className="absolute -left-2 -top-5 w-[80px] h-[80px] grid place-items-center text-4xl rounded-full border-4 text-amber-300 bg-gray-900">
                    <FaReact />
                </span>
                <div className="me-2.5">
                    <p className="text-lg">React Query</p>
                    <span className="flex items-center">
                        <div className="skills-meterTag meter-80 relative min-w-[80px] h-2 rounded overflow-hidden bg-gray-900"></div>
                        <span>&ensp; 80%</span>
                    </span>
                </div>
            </div>
            <div className={`relative min-w-[210px] h-[60px] flex items-center justify-end rounded-t-md rounded-bl-4xl rounded-br-md shadow-xl bg-amber-300 hover:scale-105 ${(screenWidth<=520)?"scale-y-122 scale-x-124":""} `} data-animation="zoom-in-up" style={{ "--gokAOS-Delay": "0.3s" }}>
                <span className="absolute -left-2 -top-5 w-[80px] h-[80px] grid place-items-center text-4xl rounded-full border-4 text-amber-300 bg-gray-900">
                    <FaConnectdevelop />
                </span>
                <div className="me-2.5">
                    <p className="text-lg">Socket io</p>
                    <span className="flex items-center">
                        <div className="skills-meterTag meter-80 relative min-w-[80px] h-2 rounded overflow-hidden bg-gray-900"></div>
                        <span>&ensp; 80%</span>
                    </span>
                </div>
            </div>
            <div className={`relative min-w-[210px] h-[60px] flex items-center justify-end rounded-t-md rounded-bl-4xl rounded-br-md shadow-xl bg-amber-300 hover:scale-105 ${(screenWidth<=520)?"scale-y-122 scale-x-124":""} `} data-animation="zoom-in-up" style={{ "--gokAOS-Delay": "0.3s" }}>
                <span className="absolute -left-2 -top-5 w-[80px] h-[80px] grid place-items-center text-4xl rounded-full border-4 text-amber-300 bg-gray-900">
                    <FaNodeJs />
                </span>
                <div className="me-2.5">
                    <p className="text-lg">JWT</p>
                    <span className="flex items-center">
                        <div className="skills-meterTag meter-90 relative min-w-[80px] h-2 rounded overflow-hidden bg-gray-900"></div>
                        <span>&ensp; 90%</span>
                    </span>
                </div>
            </div>
            <div className={`relative min-w-[210px] h-[60px] flex items-center justify-end rounded-t-md rounded-bl-4xl rounded-br-md shadow-xl bg-amber-300 hover:scale-105 ${(screenWidth<=520)?"scale-y-122 scale-x-124":""} `} data-animation="zoom-in-up" style={{ "--gokAOS-Delay": "0.3s" }}>
                <span className="absolute -left-2 -top-5 w-[80px] h-[80px] grid place-items-center text-4xl rounded-full border-4 text-amber-300 bg-gray-900">
                    <FaNodeJs />
                </span>
                <div className="me-2.5">
                    <p className="text-lg">Axios</p>
                    <span className="flex items-center">
                        <div className="skills-meterTag meter-90 relative min-w-[80px] h-2 rounded overflow-hidden bg-gray-900"></div>
                        <span>&ensp; 90%</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
// 
export default SkillPage;
