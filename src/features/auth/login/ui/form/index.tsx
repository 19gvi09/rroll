"use client"

import {Button, Form, Input} from "antd";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import {login} from "@/shared/api";

export const AuthLoginForm = () => {
  const router = useRouter()
  const logIn = async (values: {username: string, password: string}) => {
    await signIn("credentials", {...values, redirect: false})
      .then((result) => {
        if (result?.error) {

        } else {
          router.push("/");
        }
      })
  }
  return (
    <Form onFinish={logIn} layout="vertical">
      <Form.Item name="username" label="E-mail" rules={[{required: true, message: "Введите e-mail"}]}>
        <Input placeholder="example@mail.com" />
      </Form.Item>
      <Form.Item name="password" label="Пароль" rules={[{required: true, message: "Введите пароль"}]}>
        <Input.Password placeholder="Пароль" />
      </Form.Item>
      <Button htmlType="submit">Войти</Button>
    </Form>
  )
}