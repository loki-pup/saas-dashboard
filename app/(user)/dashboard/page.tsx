import NewProjBtn from "@/components/new-proj"
import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import ProjectList from "./project-list";


export default async function Page() {
    const { userId } = await auth();
    if (!userId) {
        return null;
    }

    const userProjects = await db.select().from(projects).where(eq(projects.userId, userId));

return(
    <div>
        <div className="flex items-center justify-center gap-5">
        <h1 className="text-2xl font-bold text-center my-4">Your Doggie Projects</h1>
        <NewProjBtn />
        </div>
        <ProjectList projects={userProjects}/></div>
)
}