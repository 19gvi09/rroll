"use client"

import {Layout, Menu} from "antd";
import {menuItems} from "@/shared/menu";

const {Sider} = Layout

export const SidebarWidget = ({className}) => {
  return (
    <Sider className={className} collapsible>
      <Menu theme="dark" mode="inline" items={menuItems} />
    </Sider>
  )
}