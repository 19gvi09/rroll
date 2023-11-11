"use client"
import {Layout} from "antd";
import {FC, PropsWithChildren} from "react";
import {HeaderWidget} from "@/widgets/header";
import {SidebarWidget} from "@/widgets/sidebar";
import {useSession} from "next-auth/react";

const {Content} = Layout

export const CoreLayout: FC<PropsWithChildren> = ({children}) => {
  const {status} = useSession()
  return (
    <Layout style={{minHeight: "100vh"}}>
      {status === "authenticated" && <HeaderWidget/>}
      <Layout>
        {status === "authenticated" && <SidebarWidget className="hidden md:block" />}
        <Content className="p-8">{children}</Content>
      </Layout>
    </Layout>
  )
}