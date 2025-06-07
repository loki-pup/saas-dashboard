import { db } from "@/db";
import { eq } from "drizzle-orm";
import { projects as dbProjects } from "@/db/schema";
import Link from "next/link";
import { Globe } from "lucide-react";


const page = async ({ params} : {
    params: {
        projectId: string
    }
}) => {
    if (!params.projectId) return (<div>Invalid Project Id</div>);

    const projects = await db.query.projects.findMany({
        where: (eq(dbProjects.id, parseInt(params.projectId))),
        with: {
            feedbacks: true
        }
});

const project = projects[0];

    return (
        <div>
            <div className="flex justify-between items-start">
            <div className="proj-info">
            <h1 className="text-2xl font-bold mb-3">{project.name}</h1>
            <h2 className="text-primary-background text-xl mb-2">{project.description}</h2>
            </div>
            {project.url ? <Link href={project.url} className="text-indigo-700 underline flex items-center"><Globe className="w-5 h-5 mr-1"/><span className="text-lg">Visit site</span></Link> : null}
            </div>
        </div>
    )
}

export default page;