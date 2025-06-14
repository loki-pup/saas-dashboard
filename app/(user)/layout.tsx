import React from "react";
import Loading from "./loading";
import { Suspense } from "react";

export default function UserLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="container max-w-screen-xl mx-auto py-10 px-2.5 lg:px-15">
            <Suspense fallback={<Loading />}>{children}</Suspense></div>
    )
}