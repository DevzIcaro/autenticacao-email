import bcrypt from "bcryptjs";
import { error } from "console";
import { NextResponse } from "next/server";

//Lado do servidor as validações e os tratamentos de campos feitos dentro do front deve ser refeitas aqui.
//Para garantir que nao haverá como burlar os inputs. 

interface LoginProps {
    email: string,
    password: string,
    confirmPassword: string;
}

export async function POST(request: Request) {
    const body = await request.json();

    const { email, password, confirmPassword } = body;

    if (!email || !password || !confirmPassword) {
        return NextResponse.json({ error: 'missing required fields' }, { status: 400 })
    }

    const emailReg = new RegExp(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    );

    if (!emailReg.test(email)) {
        return NextResponse.json(
            { error: 'invalid email' },
            { status: 400 }
        );
    }

    if (password.length < 8 || password !== confirmPassword) {
        return NextResponse.json(
            { error: 'invalid password' },
            { status: 400 }
        );
    }

    //aprofundar em hash
    const hash = bcrypt.hashSync(password, 8);

}