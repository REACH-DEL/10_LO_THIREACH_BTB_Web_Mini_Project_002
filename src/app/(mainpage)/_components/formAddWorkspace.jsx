"use client";
import { addWorkspaceAction } from "@/actions/workspace-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useActionState, useEffect } from "react";
import { Bounce, toast } from "react-toastify";

const FormAddWorkspace = () => {
  const [state, formAction, isPending] = useActionState(
    addWorkspaceAction,
    undefined
  );
  useEffect(() => {
    if (state?.workspaceName) {
      toast.success(
        `Added workspace name: ${state.workspaceName} successfully!`,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
    } else if (state?.errors) {
      toast.error("Failed to add workspace!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }, [state]);
  return (
    <form className="space-y-6 bg-white" action={formAction}>
      <div>
        <Label
          htmlFor="workspaceName"
          className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
        >
          Workspace Name
        </Label>

        <Input
          name="workspaceName"
          type="text"
          placeholder="Please type your workspace name"
          className={`bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90`}
        />
        {state?.errors?.name && (
          <p className="text-red-500 text-md font-mono mt-1">
            {state.errors.name[0]}
          </p>
        )}
      </div>
      <Button
        type="submit"
        className="text-base cursor-pointer bg-persian-green text-white py-2.5 rounded-lg w-full font-bold"
      >
        {isPending ? "Loading..." : "Add"}
      </Button>
    </form>
  );
};

export default FormAddWorkspace;
