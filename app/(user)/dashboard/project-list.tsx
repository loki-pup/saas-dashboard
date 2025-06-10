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
import { Lock } from "lucide-react";

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
                <Card className="max-w-[350px] h-full flex flex-col bg-gray-300">
                    <CardHeader className="flex-1">
                        <CardTitle className="flex flex-row items-center text-lg">
                            <Lock className="h-5 w-5 mr-2"/>
                            <span>Upgrade to Premium</span>
                        </CardTitle>
                        <CardDescription >
                            Unlock unlimited projects
                        </CardDescription>
                    </CardHeader>
                <CardFooter className="justify-center">
                <SubscribeBtn price={monthlyPlanId}/>
                </CardFooter>
                </Card>
            </ul>
        </div>
    )
}

export default ProjectList;