const express = require('express');
const appServer = express();
require('dotenv').config();
const cors = require('cors');
const { createTransport } = require('nodemailer');
// 
// Global middlewares setup
appServer.use(cors({
    origin: [process.env.FRONTEND_CLIENT_URL],
    credentials: true,
    methods: "POST"
}));
appServer.use(express.json());
appServer.use(express.urlencoded({ extended: true }));
// 
// Nodemailer configuration setup
const mailTransporter = createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
        user: process.env.NODEMAILER_SERVICE_EMAIL,
        pass: process.env.NODEMAILER_SERVICE_PASSWORD
    }
});
// 
// Routes and Router setup
appServer.post("/api/sendMail", async (request, response) => {
    const { visitorName, visitorEmail, visitorSubject, visitorMessage } = request.body;
    // validation
    if(!visitorName) return response.status(400).json({ RequestStatus: "Enter your Name!" });
    else if(!visitorEmail) return response.status(400).json({ RequestStatus: "Enter your valid Email!" });
    // Email sending Logic (Nodemailer)
    try {
        const mailConfig = {
            from: visitorEmail,
            to: process.env.NODEMAILER_SERVICE_EMAIL,
            subject: visitorSubject,
            text: `Portfolio message,\n\nFrom:\n\t${visitorName}\n\t(${visitorEmail})\n\nMessage:\n\t${visitorMessage}`
        }
        mailTransporter.sendMail(mailConfig, (mailError, _) => {
            if(mailError) {
                throw new Error("Error while sending email, Try again!");
            }
            return response.status(200).json({ RequestStatus: "Email sent successfully!" });
        });
        return;
    } catch (error) {
        return response.status(400).json({ RequestStatus: error.message });
    }
});
// 
// appServer is listening
appServer.listen(process.env.APP_SERVER_PORT);