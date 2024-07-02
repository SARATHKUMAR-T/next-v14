import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { IUser } from './lib/types/userType';
import clientPromise from './lib/db'
import bcrypt from "bcrypt"

async function getUser(email: string): Promise<any> {
  try {
    const client = await clientPromise
    const db = client.db("test")
    const user = db.collection('users').findOne({ email })
    return user
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email({ message: "Please Enter Valid Email" }), password: z.string().min(6) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const user = await getUser(parsedCredentials.data.email)
          if (!user) return null
          const checkPassword = await bcrypt.compare(parsedCredentials.data.password, user.password)
          if (checkPassword) return user
        }
        return null
      },
    }),
  ],
});