import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./db";
import userModel from "@/models/user.model";
import bcrypt from "bcryptjs";

const authOptions: NextAuthOptions = {

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
      },

      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          throw new Error("Email or Password is Not Found");
        }

        await connectToDb();

        const user = await userModel.findOne({ email });

        if (!user) throw new Error("User not Found");

        const validPass = await bcrypt.compare(password, user.password);

        if (!validPass) throw new Error("PassWord is Not valid");

        return {
          id: user._id,
          name: user.name,
          email: user.email,
          image: user.image,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.image = token.image as string;
      }

      return session;
    },
  },
  session: {
    strategy:'jwt',
    maxAge:30*24*60*60*1000
  },
  pages: {
    signIn:'/login',
    error:'/login'
  },
  secret: process.env.NEXT_AUTH_SECRET,
};

export default authOptions;
