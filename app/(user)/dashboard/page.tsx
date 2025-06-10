import NewProjBtn from "@/components/new-proj"
import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import ProjectList from "./project-list";
import { getSubscription } from "@/actions/userSubscription";
import { maxFreeProjects } from "@/lib/payment";

export default async function Page() {
    const { userId } = await auth();
    if (!userId) {
        return null;
    }

    const userProjects = await db.select().from(projects).where(eq(projects.userId, userId));

    const subscribed = await getSubscription({userId});

return(
    <div>
        <div className="flex items-center justify-center gap-5">
        <h1 className="text-2xl font-bold text-center my-4">Your Doggie Projects</h1>
        {subscribed !== true && userProjects.length > maxFreeProjects ? null : <NewProjBtn />}
        </div>
       {subscribed !== true && userProjects.length ? <ProjectList projects={userProjects.slice(0, maxFreeProjects)}/> : <ProjectList projects={userProjects} />}</div>
) 
}