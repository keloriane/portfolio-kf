import { EmailTemplate } from "@/components/common/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";




export async function POST(request:Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const body = await request.json();
        console.log('data ======>' , body);
        const { email, firstname, lastname, phonenumber, message } = body;
        console.log(body)
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'kevin.flbt@gmail.com',
            subject: 'Email form portfolio',
            react: EmailTemplate({email , firstname, lastname, phonenumber, message}),
            html: `<p>Message from ${firstname} ${lastname} : ${message} <br/> form mail: ${email} </p>`
        });

        if(data.status === 'success') {
            return NextResponse.json({message: 'Email sent successfully'});
        }

        
        return NextResponse.json( data );
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error });
    }
}


export async function GET() {
    
    try {
        const { data } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'kevin.flbt@gmail.com',
            subject: 'Hello World',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        })

        return NextResponse.json({ data });

    }
    catch (error) {
        console.error(error);
        return NextResponse.json({ error });
    }
}
