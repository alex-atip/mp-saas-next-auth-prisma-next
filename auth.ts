import NextAuth from "next-auth"
import credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [credentials({})],
})