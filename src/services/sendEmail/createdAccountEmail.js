import mailerConnect from "../../config/nodeMailer"
import { getTestMessageUrl } from "nodemailer"

async function createdAccountEmail(name, email) {

    try {
        const transporter = await mailerConnect()

        const info = await transporter.sendMail({
            from: '"Recicla Mais" <no-reply@reciclamais.com>',
            to: `"${name}" <${email}>`,
            subject: "Cadastro Recicla Mais",
            html: `
                <h2>
                <p>Olá, <strong>${name}</strong>!</p>
                 <p>Sua conta foi criada com sucesso no Recicla Mais.</p>
                 <p>Acesse sua conta, cadastre um endereço e comece a Reciclar Mais com a gente.</p>
                 </h2>
                 <br>
                 <p>Atenciosamente, Equipe Recicla Mais.</p>
                 `
        })

        console.log("Email Nova Conta Enviado: ", info.messageId)

        console.log("URL: ", getTestMessageUrl(info))

    } catch (err) {
        console.error(err)
    }
}

export default createdAccountEmail