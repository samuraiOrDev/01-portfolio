import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
type TypeData = {
  name: string;
  email: string;
  message: string;
};

const sendMail = async ({ name, email, message }: TypeData) => {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ca4a39190b5fbf",
      pass: "3d04661f3c0f9c",
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take messages");
    }
  });
  const mailOptions = {
    from: name,
    to: "vmordiales@gmail.com", //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    html: "<h1>¡Hola!</h1><p>Este es un mensaje de prueba enviado desde Nodemailer.</p>",
  };
  try {
    // Envía el correo electrónico
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo electrónico enviado:", info.response);
    return { success: true };
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    return { success: false };
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ message: "Please fill all fields" });
    const result = await sendMail({ name, email, message });
    if (result.success) {
      // Envía una respuesta en formato HTML
      return res.status(200).json({ message: "Correo electrónico enviado" });
    } else {
      // Envía una respuesta de error en formato HTML
      return res
        .status(500)
        .json({ message: "Error al enviar el correo electrónico" });
    }
  } else {
    res.status(405).json({ message: "Solo se permiten solicitudes POST<" });
  }
};

export default handler;
