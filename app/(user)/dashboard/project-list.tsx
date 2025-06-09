import { InferSelectModel } from "drizzle-orm";
import { projects } from "@/db/schema";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button }  from "@/components/ui/button";
import Link from "next/link";
import SubscribeBtn from "../payments/subscribe-btn";
import { monthlyPlanId } from "@/lib/payment";


type Project = InferSelectModel<typeof projects>;

type Props = {
    projects: Project[]
};

const ProjectList = (props: Props) => {
    return (
        <div>
            <ul className="grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-6">
                {props.projects.map((project: Project) => (
                    <li key={project.id}>
                        <Card className="max-w-[350px] h-full flex flex-col">
                            <CardHeader className="flex-1">
                                <CardTitle>
                                    {project.name}
                                </CardTitle>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Link href={`/projects/${project.id}`}>
                                    <Button className="cursor-pointer">View Project</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </li>
                ))}
                <SubscribeBtn price={monthlyPlanId}/>
            </ul>
        </div>
    )
}

export default ProjectList;