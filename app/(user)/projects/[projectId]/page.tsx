import { db } from "@/db";
import { eq } from "drizzle-orm";
import { projects as dbProjects } from "@/db/schema";
import Link from "next/link";
import { Globe, ChevronLeft, Code } from "lucide-react";
import Table from "@/components/table";


export type paramsType = Promise<{ projectId: string }>;


export default async function page(props: { params: paramsType }) {
  const { projectId } = await props.params;

    if (!projectId) return (<div>Invalid Project Id</div>);

    const projects = await db.query.projects.findMany({
        where: (eq(dbProjects.id, parseInt(projectId))),
        with: {
            feedbacks: true
        }
});

const project = projects[0];

    return (
        <div>
            <div>
                <Link href="/dashboard" className="flex w-fit items-center text-indigo-700 mb-5">
                    <ChevronLeft className="h-5 w-5 mr-1" />
                    <span className="text-base">Back to projects</span>
                    </Link>
            </div>
            <div className="flex justify-between items-start">
            <div className="proj-info">
            <h1 className="text-2xl font-bold mb-3">{project.name}</h1>
            <h2 className="text-primary-background text-base mb-2">{project.description}</h2>
            </div>
            <div className="flex flex-col">
            {project.url ?  <Link
      href={project.url.startsWith('http://') || project.url.startsWith('https://') 
        ? project.url 
        : `https://${project.url}`}
            className="text-indigo-700 underline flex items-center">
                <Globe className="w-4 h-4 mr-1"/>
                <span className="text-sm">Visit site</span></Link> : null}
            <Link href={`/projects/${projectId}/instructions`} className="text-indigo-700 underline flex items-center mt-2">
            <Code className="w-4 h-4 mr-1"/>
            <span className="text-sm">Embed Code</span>
            </Link>
            </div>
            </div>
            <div>
                <Table data={project.feedbacks}/>
            </div>
        </div>
    )
}

