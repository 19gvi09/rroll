import {MenuProps} from "antd";
import Link from "next/link";
import {BankOutlined, PieChartOutlined, ScheduleOutlined, TeamOutlined} from "@ant-design/icons";

export const menuItems: MenuProps["items"] = [
  {
    label: <Link href="/">Dashboard</Link>,
    key: "/",
    icon: <PieChartOutlined />
  },
  {
    label: <Link href="/points">Points</Link>,
    key: "/points",
    icon: <BankOutlined />
  },
  {
    label: <Link href="/employees">Employees</Link>,
    key: "/employees",
    icon: <TeamOutlined />
  },
  {
    label: <Link href="/grades">Grades</Link>,
    key: "/grades",
    icon: <TeamOutlined />
  },
  {
    label: <Link href="/locations">Locations</Link>,
    key: "/locations",
    icon: <BankOutlined />
  },
  {
    label: <Link href="/tasks">Tasks</Link>,
    key: "/tasks",
    icon: <ScheduleOutlined />
  },
]