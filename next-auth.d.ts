import { Session, DefaultSession, User } from "next-auth"
import { JWT } from "next-auth/jwt"
import {BearerResponse, UserRead} from "@/shared/types";

declare module "next-auth" {
  interface Session extends BearerResponse {
    user: UserRead
  }
  interface User extends UserRead {}
}

declare module "next-auth/jwt" {
  interface JWT extends BearerResponse {}
}