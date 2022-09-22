import mailerConnect from "../../config/nodeMailer"
import { getTestMessageUrl } from "nodemailer"
import moment from "moment"

async function createdSchedulingEmail(name, email, service, datetime) {

    try {

        const date = moment(datetime).format("DD-MM-YYYY")
        const time  = moment(datetime).format("HH:mm")
        const transporter = await mailerConnect()

        const info = await transporter.sendMail({
            from: '"Recicla Mais" <no-reply@reciclamais.com>',
            to: email,
            subject: "Novo Agendamento - Recicla Mais",
            html: `<h2>
                <p> Olá, <strong>${name}</strong>! </p>
                 <p>   Confirmando agendamento para coleta de ${service} no dia ${date} as ${time}.</p>
                 </h2>
                 <br>
                 <p>Atenciosamente, Equipe Recicla Mais.</p>
                 `
        })

        console.log("Email Agendamento Enviado: ", info.messageId)
        console.log("URL: ", getTestMessageUrl(info))

    } catch (err) {
        console.error(err)
    }
}

export default createdSchedulingEmail