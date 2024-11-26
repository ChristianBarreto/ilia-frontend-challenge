import { Outlet } from "react-router-dom";
import Header from "../molecules/Header";

export default function MainTemplate() {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Outlet />
      </div>

    </div>
  )
}