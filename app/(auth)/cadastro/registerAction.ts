'use server';

import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";

export default async function registerAction(
  prevState: unknown,
  formData: FormData
) {

  const entries = Array.from(formData.entries());
  const data = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };

  console.log('*******server action register user*******')
  console.log(data);

  //se nao tiver todos os dados preenchidos, deve retornar um erro
  if (!data.email || !data.name || !data.password) {
    return {
      message: 'Preencha todos os campos',
      success: false,
    };
  }

  //verificar se o usuario existe, retorna erro
  const user = await db.user.findUnique({
    where: {
      email: data.email,
    }
  });

  if (user) {
    return {
      message: 'Este usuário já existe!',
      success: false,
    }
  }

  //se nao existir, cria o usuario
  await db.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: hashSync(data.password)
    },
  });

  return {
    message: 'Usuário criado com sucesso!',
    success: true,
  }
}