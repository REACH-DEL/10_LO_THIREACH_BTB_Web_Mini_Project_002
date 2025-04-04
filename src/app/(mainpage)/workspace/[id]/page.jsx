import {
  getWorkspaceByIdService,
  updateWorkspaceFavIdService,
} from "@/service/workspace-service";
import { PlusSquare, SquarePlus, Star } from "lucide-react";
import { FavoriteButton } from "../../_components/favoriteButton";
import FormAddWorkspace from "../../_components/formAddWorkspace";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FormAddTask from "../../_components/formAddTask";
import InStarted from "../../_components/inStated";
import InprogressComponent from "../../_components/inprogress";
import FinishComponent from "../../_components/finish";

const WorkspacePage = async ({ params }) => {
  const id = (await params).id;
  const data = await getWorkspaceByIdService(id);
  return (
    <>
      <div className="px-12 mt-5 w-full flex justify-between">
        <h2 className="text-2xl text-black font-bold">{data.workspaceName}</h2>
        <FavoriteButton id={id} isFavorite={data.isFavorite} />
      </div>

      <div className="px-12 mt-5 grid grid-cols-3 gap-15">
        <InStarted id={id} />
        <InprogressComponent />
        <FinishComponent />
      </div>

      {/* add task */}
      <Dialog>
        <DialogTrigger asChild>
          <button
            className={
              "flex gap-2 fixed bottom-10 right-14 bg-blue-500 text-white px-6 py-2.5 w-fit rounded-xl text-xl font-semibold items-end"
            }
          >
            <PlusSquare color="white" />
            New Task
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Create new Task
            </DialogTitle>
          </DialogHeader>
          <FormAddTask id={id} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WorkspacePage;
