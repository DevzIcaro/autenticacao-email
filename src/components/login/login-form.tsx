"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import React from "react"
import { FormEvent, useCallback, useRef, useState } from "react"

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

    const [formError, setFormError] = useState("");

    const handleLoginClick = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setFormError("")


        const emailReg = new RegExp(
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        );

        if (emailInputRef.current && passwordInputRef.current && confirmPasswordInputRef.current) {
            const email = emailInputRef.current.value;
            const password = passwordInputRef.current.value;
            const confirmPassword = confirmPasswordInputRef.current.value;

            if (!emailReg.test(email)) {
                setFormError("Digite um email válido.")
                return;
            }

            if (password.length < 8) {
                setFormError("A senha precisa de pelo menos 8 caracteres.")
                return;
            }

            if (confirmPassword != password) {
                setFormError("As senhas não são iguais")
                return;
            }
        }

        

    }, []);


    return (
        <div className={cn("grid w-[600px] h-[850px] m-auto", className)} {...props}>
            <Card className="shadow-gray-600 h-[500px] mt-48 flex ">
                <CardHeader className="flex flex-col items-center">
                    <CardTitle className="font-bold">Acesse sua conta</CardTitle>
                    <CardDescription>
                        Insira seu e-mail aaixo para acessar sua conta
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLoginClick}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    ref={emailInputRef}
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Senha</FieldLabel>
                                </div>
                                <Input
                                    ref={passwordInputRef}
                                    id="password"
                                    type="password"
                                    placeholder="senha"
                                    required
                                />

                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="confirmPassword">Confirme Sua Senha</FieldLabel>
                                </div>
                                <Input
                                    ref={confirmPasswordInputRef}
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirme sua senha"
                                    required
                                />
                                <a
                                    href="#"
                                    className="m-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    esqueceu sua senha?
                                </a>
                            </Field>
                            <Field>
                                {formError && (
                                    <div className="text bg-red-500">
                                        <p className="text-sm font-semibold">Erro no formulário.</p>
                                        <p>{formError}</p>
                                    </div>
                                )}

                                <Button type="submit">Cadastrar</Button>

                                {/* Realizar login auth0 */}
                                <Button variant="outline" type="button" className="bg-orange-200">
                                    Login with Google `fazer depois`
                                </Button>

                                <FieldDescription className="text-center">
                                    Você não tem conta? <a href="#">Cadastre-se</a>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
