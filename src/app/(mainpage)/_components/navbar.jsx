import { Bell } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../components/ui/breadcrumb";
import Userprofile from "./userprofile";

export const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-12">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className={"text-gray-700 text-xl cursor-pointer"}>
              <BreadcrumbLink>Workspace</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage
                className={
                  "text-xl font-medium text-blue-700 hover:text-blue-500"
                }
              >
                HRD Design
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex gap-5 items-center">
          <Bell size={30} />
          <Userprofile />
        </div>
      </div>
      <hr className="mt-5 text-gray-500" />
    </div>
  );
};
export default Navbar;
