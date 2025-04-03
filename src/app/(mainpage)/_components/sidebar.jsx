import { LogOut } from "lucide-react";
import Favarite from "./favarite";
import Logo from "../../../components/logo";
import { Button } from "../../../components/ui/button";
import Workspace from "./workspace";

const Sidebar = () => {
  return (
    <div className="h-screen">
      <div className="mx-auto my-12 flex justify-center w-full">
        <Logo />
      </div>
      <div className="grid grid-rows-4 h-full gap-10">
        <Workspace />
        <Favarite />
        <button className="hover:bg-gray-300 px-6 py-2 rounded-xl w-fit h-fit flex items-center gap-2">
          <LogOut size={24} color="gray" />
          <span className="font-semibold text-xl text-gray-500">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
