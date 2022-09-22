import nodemailer from "nodemailer"

async function mailerConnect() {
    try {
        const account = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || account.smtp.host,
            port: process.env.SMTP_PORT || account.smtp.port,
            secure: process.env.SMTP_SECURE || account.smtp.secure,
            auth: {
                user: process.env.SMTP_AUTH_USER || account.user,
                pass: process.env.SMTP_AUTH_PASS || account.pass
            }
        })

        return transporter

    } catch (err) {
        console.error(err)
    }
}

export default mailerConnect