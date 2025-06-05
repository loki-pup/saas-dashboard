import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "./ui/input";
  import { Label } from "./ui/label";
  import { Textarea } from "./ui/textarea";
  import { Plus } from "lucide-react";
  import { createProject } from "@/actions/createProject";
  import SubmitButton from "./submit-proj-btn";

const NewProjBtn = () => {
    return (
        <Dialog>
  <DialogTrigger asChild>
    <Button>
        <Plus className="w-4 h-4 mr-0.5"/>Create Doggie Project</Button></DialogTrigger>
  <DialogContent className="sm:max-w-[525px] rounded-md">
    <DialogHeader>
      <DialogTitle>New Doggie Project</DialogTitle>
      <DialogDescription>
        Create a new doggie project to get started
      </DialogDescription>
    </DialogHeader>
    <form className="flex flex-col gap-4" action={createProject}>
        <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
        <Label htmlFor="name">Doggie Name</Label>
        <Input id="name" name="name" placeholder="Bozyu" />
        </div>
        <div className="flex flex-col gap-2">
        <Label htmlFor="url">Doggie URL</Label>
        <Input id="url" name="url" placeholder="www.bozyu.com" />
        </div>
        </div>
        <div className="flex flex-col gap-2">
        <Label htmlFor="description">Doggie Description</Label>
        <Textarea id="description" name="description" placeholder="Doggie Description"/>
        </div>
        <SubmitButton />
    </form>
  </DialogContent>
</Dialog>
    )
};

export default NewProjBtn;