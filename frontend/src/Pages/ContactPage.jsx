import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from '../axiosConfigFile.js';
import { useMutation } from '@tanstack/react-query';
import { useOutletContext } from "react-router-dom";
import { FaBook, FaEnvelope, FaGithub, FaHandshake, FaInstagram, FaLinkedin, FaPenAlt, FaRegCopyright, FaUserAlt } from "react-icons/fa";
// Email constants
const EmailRegex = /^[\w.%+-]{4,}@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const EmailInitialDetails = {
    visitorName: "",
    visitorEmail: "",
    visitorSubject: "",
    visitorMessage: ""
}
// contactPage component
const ContactPage = () => {
    const { screenWidth } = useOutletContext();
    const [errorIndicator, setErrorIndicator] = useState("");
    const [mailDetails, setMailDetails] = useState(EmailInitialDetails);
    // api request setup for email sending using react query (useMutation)
    const { mutate: sendEmail } = useMutation({
        mutationFn: async () => {
            const data = axios.post("/api/sendMail", mailDetails);
            return data;
        },
        onSuccess: (EmailSentResponse) => {
            if (EmailSentResponse?.data?.RequestStatus === "Email sent successfully!") {
                toast.success("Email sent successfully!");
                setMailDetails(EmailInitialDetails);
            }
        },
        onError: (EmailErrorResponse) => {
            if (EmailErrorResponse?.response?.data?.RequestStatus) {
                toast.error(EmailErrorResponse?.response?.data?.RequestStatus);
            }
        }
    });
    // handling email message sending logic
    const handleSendMessage = (e) => {
        e.preventDefault();
        // Mail details validation
        if (!mailDetails.visitorName) {
            toast.warn("Enter your Name!");
            setErrorIndicator("visitorName");
            return;
        }
        else if (!mailDetails.visitorEmail) {
            toast.warn("Enter your Email!");
            setErrorIndicator("visitorEmail");
            return;
        }
        else if (!EmailRegex.test(mailDetails.visitorEmail)) {
            toast.warn("Invalid Email format!");
            setErrorIndicator("visitorEmail");
            return;
        }
        else if (!mailDetails.visitorSubject) {
            setErrorIndicator("visitorSubject");
        }
        else if (!mailDetails.visitorMessage) {
            setErrorIndicator("visitorMessage");
        }
        // calling api mutate function to send mail
        sendEmail();
    }
    // 
    return (
        <div className={`relative w-full m-auto flex flex-col items-center justify-between tracking-wider ${(screenWidth<=580)?"min-h-[560px]":"min-h-[500px]"}`}>
            <main className={`w-full h-full flex flex-col items-center justify-between`}>
                <div className={`w-full h-[100px] flex flex-col gap-y-3 items-center justify-center`}>
                    <p className="inline-flex items-center text-xl font-bold text-amber-100" data-animation="fade-down" style={{ "--gokAOS-Delay": "0.3s" }}><FaHandshake className="text-3xl mt-0.5 text-amber-400" />&nbsp;Keep touch with me&nbsp;<FaHandshake className="text-3xl mt-0.5 text-amber-400" /></p>
                    <div className="flex gap-x-6">
                        <span className="w-10 h-10 text-2xl rounded-full overflow-hidden active:scale-95 hover:bg-amber-100 bg-amber-300" data-animation="zoom-out" style={{ "--gokAOS-Delay": "0.3s" }}>
                            <a href={import.meta.env.VITE_GITHUB_URL} target="_blank" rel="noopener noreferrer" className='w-full h-full flex'><FaGithub className='m-auto' /></a>
                        </span>
                        <span className="w-10 h-10 text-2xl rounded-full overflow-hidden active:scale-95 hover:bg-amber-100 bg-amber-300" data-animation="zoom-out" style={{ "--gokAOS-Delay": "0.6s" }}>
                            <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className='w-full h-full flex'><FaLinkedin className='m-auto' /></a>
                        </span>
                        <span className="flex w-10 h-10 text-2xl rounded-full cursor-pointer overflow-hidden active:scale-95 hover:bg-amber-100 bg-amber-300" data-animation="zoom-out" style={{ "--gokAOS-Delay": "0.9s" }}>
                            <FaEnvelope className='m-auto' />
                        </span>
                        <span className="flex w-10 h-10 text-2xl rounded-full cursor-no-drop overflow-hidden active:scale-95 hover:bg-amber-100 bg-amber-300" data-animation="zoom-out" style={{ "--gokAOS-Delay": "1.2s" }}>
                            <FaInstagram className='m-auto' />
                        </span>
                    </div>
                </div>
                <div className={`w-full min-h-[calc(100%-100px)] flex items-center justify-center`}>
                    <form className={`h-full flex flex-col items-center justify-center gap-y-6 ${(screenWidth <= 580) ? "w-[85%]" : "w-fit"}`} onSubmit={handleSendMessage}>
                        <div className={`w-full flex items-center gap-x-2 ${(screenWidth <= 580) ? "flex-col gap-y-6" : "flex-row"}`}>
                            <fieldset className="gokUI-inputTag type2" data-size="md" style={{ width: `${(screenWidth <= 420) ? "100%" : (screenWidth <= 580) ? "90%" : "280px"}`, "--gokAOS-Delay": "0.3s" }} data-animation="fade-right">
                                <span><FaUserAlt /></span>
                                <input type="text" name="visitorName" id="visitorName" placeholder="" value={mailDetails.visitorName} onChange={(e) => setMailDetails(previousDetails => ({ ...previousDetails, [e.target.name]: e.target.value }))} style={(errorIndicator === "visitorName") ? { borderColor: "orangered" } : {}} />
                                <label htmlFor="visitorName">Enter name</label>
                            </fieldset>
                            <fieldset className="gokUI-inputTag type2" data-size="md" style={{ width: `${(screenWidth <= 420) ? "100%" : (screenWidth <= 580) ? "90%" : "280px"}`, "--gokAOS-Delay": "0.3s" }} data-animation="fade-left">
                                <span><FaUserAlt /></span>
                                <input type="email" name="visitorEmail" id="visitorEmail" placeholder="" value={mailDetails.visitorEmail} onChange={(e) => setMailDetails(previousDetails => ({ ...previousDetails, [e.target.name]: e.target.value }))} style={(errorIndicator === "visitorEmail") ? { borderColor: "orangered" } : {}} />
                                <label htmlFor="visitorEmail">Enter email</label>
                            </fieldset>
                        </div>
                        <fieldset className="gokUI-inputTag type2" data-size="md" style={{ width: `${(screenWidth <= 420) ? "100%" : (screenWidth <= 580) ? "90%" : "100%"}`, "--gokAOS-Delay": "0.6s" }} data-animation="zoom-out">
                            <span><FaPenAlt /></span>
                            <input type="text" name="visitorSubject" id="visitorSubject" placeholder="" value={mailDetails.visitorSubject} onChange={(e) => setMailDetails(previousDetails => ({ ...previousDetails, [e.target.name]: e.target.value }))} style={(errorIndicator === "visitorSubject") ? { borderColor: "orangered" } : {}} />
                            <label htmlFor="visitorSubject">Write subject</label>
                        </fieldset>
                        <fieldset className="gokUI-textarea type2" data-size="md" style={{ width: `${(screenWidth <= 420) ? "100%" : (screenWidth <= 580) ? "90%" : "100%"}`, "--gokAOS-Delay": "0.9s" }} data-animation="zoom-out-up">
                            <span><FaBook /></span>
                            <textarea name="visitorMessage" id="visitorMessage" placeholder="" value={mailDetails.visitorMessage} onChange={(e) => setMailDetails(previousDetails => ({ ...previousDetails, [e.target.name]: e.target.value }))} style={(errorIndicator === "visitorMessage") ? { borderColor: "orangered" } : {}} />
                            <label htmlFor="visitorMessage">Write message. . .</label>
                        </fieldset>
                        <input type="submit" value="Send email" className='gokUI-btn warning -translate-y-2' data-animation="fade-up" style={{ "--gokAOS-Delay": "1.4s" }} />
                    </form>
                </div>
            </main>
            <footer className="fixed bottom-0 left-0 w-full h-[42px] text-sm flex flex-col self-end items-center justify-center font-bold rounded-t-xl bg-amber-200">
                <p className="inline-flex">{new Date().getFullYear()} copyright&nbsp;<FaRegCopyright className="mt-[2.5px] text-md" />&nbsp;</p>
                <p>All Rights Reserved by <span className="text-red-400">Gokul Krishna</span></p>
            </footer>
        </div>
    )
}
// 
export default ContactPage;