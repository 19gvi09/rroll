"use client"
import { FC, PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

export const NextAuthProvider: FC<PropsWithChildren<{ session: Session }>> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>{children}</SessionProvider>
  )
}