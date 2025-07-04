import CopyBtn from "@/components/copy-btn";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";


export type paramsType = Promise<{ projectId: string }>;


export default async function page(props: { params: paramsType }) {
  const { projectId } = await props.params;

    if (!projectId) return (<div>Invalid Project ID</div>);
    if (!process.env.WIDGET_URL) return(<div>Missing WIDGET_URL</div>);


    return (
        <div>
                        <div>
                <Link href={`/projects/${projectId}`} className="flex w-fit items-center text-indigo-700 mb-5">
                    <ChevronLeft className="h-5 w-5 mr-1" />
                    <span className="text-base">Back to project</span>
                    </Link>
            </div>
            <h1 className="text-xl font-bold mb-2">Start Collecting Doggie Feedback</h1>
            <p className="text-lg text-secondary-foreground">Embed the code in site</p>
            <div className="bg-blue-950 rounded-md mt-6 p-6 relative">
            <code className="text-white">
                {`<doggie-widget project-id="${projectId}"></doggie-widget>`}
                <br />
                {`<script src="${process.env.WIDGET_URL}/widget.umd.js"><\script>`}
            </code>
            <CopyBtn text={`<doggie-widget project="${projectId}"></doggie-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"><\script>`}/>
            </div>
        </div>
    )
}

