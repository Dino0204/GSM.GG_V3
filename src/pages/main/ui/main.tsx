import { Outlet } from "react-router-dom"
import { Header } from "../../../shared/ui/header/header"

export default function Main() {
  return (
    <div className="flex flex-col bg-base-400 h-screen">
      <Header />
      <Outlet />
    </div>
  )
}

