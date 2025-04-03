import { randomColor } from "@/actions/randomColor";
import {
  DialogClose,
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Cross, Ellipsis, SquarePlus } from "lucide-react";
import FormAddWorkspace from "./formAddWorkspace";
import { getAllWorkspaceService } from "@/service/workspace-service";

const Workspace = async () => {
  let datas = [];
  datas = await getAllWorkspaceService();
  return (
    <div className="space-y-3 w-full">
      <div className="flex justify-between items-center px-8">
        <h2 className="font-semibold text-xl text-gray-500">Workspace</h2>

        <Dialog>
          <DialogTrigger asChild>
            <SquarePlus size={24} color="gray" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                Add new workspace
              </DialogTitle>
            </DialogHeader>
            <FormAddWorkspace />
          </DialogContent>
        </Dialog>
      </div>

      <div className="h-[90%] overflow-y-scroll">
        {datas.map((e) => (
          <a
            key={e.workspaceId}
            className="flex items-center justify-between px-6 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 group"
            href={`/workspace/${e.workspaceId}`}
          >
            <span className="flex items-center text-lg font-medium group-hover:font-bold">
              <svg
                color={randomColor()}
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-dot-icon lucide-dot"
              >
                <circle cx="12.1" cy="12.1" r="1" />
              </svg>
              {e.workspaceName}
            </span>
            <button>
              <Ellipsis size={38} strokeWidth={1} />
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Workspace;
