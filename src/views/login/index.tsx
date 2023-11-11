"use client"
import {AuthLoginForm} from "@/features/auth";

export const LoginPage = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      Login: testmanager@testmanager.testmanager
      <br/>
      Password: testmanager
      <AuthLoginForm />
    </div>
  )
}