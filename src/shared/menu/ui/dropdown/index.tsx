"use client"

import {Button, Dropdown} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import {menuItems} from "../../model";

export const MenuDropdown = () => {
  return (
    <Dropdown menu={{items: menuItems}} trigger={["click"]}>
      <Button icon={<MenuOutlined />} />
    </Dropdown>
  )
}