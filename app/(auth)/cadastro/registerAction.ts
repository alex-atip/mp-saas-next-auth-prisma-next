'use server';

export default async function registerAction(formData: FormData) {
  const entries = Array.from(formData.entries());
  const data = Object.fromEntries(entries)

  console.log('*******server action register user*******')
  console.log(data);

  //se nao tiver todos os dados preenchidos, deve retornar um erro
  if (!data.email || !data.name || !data.password) {
    throw new Error('Você precisa preencher todos os campos para validação!')
  }

  //verificar se o usuario existe, retorna erro

  
  //se nao existir, cria o usuario
}