import { Navigation } from "./Navigation";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="h-screen flex">
      <div className="w-1/4 h-full py-8 px-6 bg-gray-100">
        <Navigation />
      </div>

      <div className="w-3/4 pt-8 pb-20 px-6">
        <Outlet />
      </div>
    </div>
  );
};
