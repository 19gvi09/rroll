import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {getViewer, login} from "@/shared/api";

export const authConfig: NextAuthConfig = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        password: {
          type: "password",
        },
        username: {
          type: "text",
        },
      },
      async authorize(credentials, request) {
        const {username, password} = credentials
        const body = {username, password}
        const token = await login({body})
        if (!token) return null
        const user = await getViewer(token.access_token)
        if (!user) return null
        return {
          ...user,
          access_token: token?.access_token
        }
        return null
      },
    }),
  ],
  callbacks: {
    authorized(params) {
      return !!params.auth?.user;
    },
    jwt({ token, user }) {
      return {...token, ...user}
    },
    session({ session, token }) {
      return {...session, user: {...session.user, ...token}, access_token: token.access_token}
    },
  },
  pages: {
    signIn: "/login"
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);