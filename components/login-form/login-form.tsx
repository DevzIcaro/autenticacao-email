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

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("grid w-[600px] h-[850px] m-auto", className)} {...props}>
            <Card className="shadow-gray-600 h-[400px] mt-48 flex ">
                <CardHeader className="flex flex-col items-center">
                    <CardTitle className="font-bold">Acesse sua conta</CardTitle>
                    <CardDescription>
                        Insira seu e-mail aaixo para acessar sua conta
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
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
                                <Input id="password" type="password" placeholder="senha" required />
                                <a
                                    href="#"
                                    className="m-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    esqueceu sua senha?
                                </a>
                            </Field>
                            <Field>
                                <Button type="submit">Login</Button>

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
