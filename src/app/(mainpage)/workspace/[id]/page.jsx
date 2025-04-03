import { getWorkspaceByIdService } from "@/service/workspace-service";
import { Star } from "lucide-react";

const WorkspacePage = async ({ params}) => {
  const id = (await params).id; // Fix here, no need for await
  const data = await getWorkspaceByIdService(id);

  return (
    <div className="px-12 mt-5 w-full flex justify-between">
      <h2 className="text-2xl text-black font-bold">{data.workspaceName}</h2>
      <a href={`/workspace/${id}?isfavorite=${data.isFavorite?"false":"true"}`}>
        <Star fill={data.isFavorite ? "orange" : "white"} size={24} />
      </a>
    </div>
  );
};

export default WorkspacePage;
