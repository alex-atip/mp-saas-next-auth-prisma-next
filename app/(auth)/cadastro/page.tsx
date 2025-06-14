import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import RegisterForm from "./register-form";
import Link from "next/link";


export default function RegisterPage() {

  return (
    <>
      <Card className="max-w-sm w-full rounded-2xl mt-12">
        <CardHeader>
          <h2 className="text-xl font-bold">Cadastre-se</h2>
          <CardDescription>Faça seu cadastro gratuitamente.</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground mt-3">
        Já possui cadastro?{" "}
        <Link className="text-gray-800 hover:underline" href="/login">
          Faça o login
        </Link>
        .
      </p>
    </>
  );
}
