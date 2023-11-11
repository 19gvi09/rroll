"use client"

import {Avatar, Col, Dropdown, Layout, MenuProps, Row, Space} from "antd";
import Link from "next/link";
import {DownOutlined, LogoutOutlined, UserOutlined} from "@ant-design/icons";
import {MenuDropdown} from "@/shared/menu";
import {signOut, useSession} from "next-auth/react";
import {logout} from "@/shared/api";

const {Header} = Layout

export const HeaderWidget = () => {
  const session = useSession()
  const logOut = async () => {
    try {
      await logout(session.data.access_token)
    } catch (e) {
      throw e
    }
    await signOut()
  }
  const items: MenuProps["items"] = [
    {
      label: <Link href="/profile">Личный кабинет</Link>,
      icon: <UserOutlined />,
      key: "profile",
    },
    {
      label: <Link href="/login" onClick={logOut}>Выйти</Link>,
      icon: <LogoutOutlined />,
      key: "logout",
    },
  ];
  return (
    <Header>
      <Row justify="space-between" align="middle">
        <Col md={0}>
          <MenuDropdown />
        </Col>
        <Col md={1} />
        <Col>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Space className="cursor-pointer">
              <Avatar size={60}>MM</Avatar>
              <DownOutlined color="white" />
            </Space>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  )
}