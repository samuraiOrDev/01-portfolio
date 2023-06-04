import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
const HTML_TEMPLATE = (message: string, email: string, name: string) => {
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>NodeMailer Email Template</title>
          <style>
            .container {
              width: 100%;
              height: 100%;
              padding: 20px;
              background-color: #f4f4f4;
            }
            .email {
              width: 80%;
              margin: 0 auto;
              background-color: #fff;
              padding: 20px;
            }
            .email-header {
              background-color: #333;
              color: #fff;
              padding: 20px;
              text-align: center;
            }
            .email-body {
              padding: 20px;
            }
            .email-footer {
              background-color: #333;
              color: #fff;
              padding: 20px;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="email">
              <ul>
                <li>Nombre: ${name}</li>
                <li>Email: ${email}</li>
              </ul>
              <div>
                ${message}
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
};

type TypeData = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

const sendMail = async ({ name, email, message, subject }: TypeData) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    // secure: false,
    auth: {
      user: process.env.GMAIL_USER, //Change to your email address
      pass: process.env.GMAIL_PASSWORD_APP, //Change to your password
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take messages");
    }
  });
  const options = {
    from: "Web personal samuraior.dev <samurai.dev.ordiales@gmail.com>",
    to: process.env.GMAIL_USER, //Change to email address that you want to receive messages on
    subject: subject,
    html: HTML_TEMPLATE(message, email, name),
  };
  try {
    // Envía el correo electrónico
    const info = await transporter.sendMail(options);
    console.log("Correo electrónico enviado:", info.response);
    return { success: true };
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    return { success: false };
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, message, subject } = req.body;
    if (!name || !email || !message || !subject)
      return res.status(400).json({ message: "Please fill all fields" });
    const result = await sendMail({ name, email, message, subject });
    if (result.success) {
      return res
        .status(200)
        .json({ message: "Correo electrónico enviado" });
    } else {
      return res
        .status(500)
        .json({ message: "Error al enviar el correo electrónico" });
    }
  } else {
    res.status(405).json({ message: "Solo se permiten solicitudes POST<" });
  }
};

export default handler;
