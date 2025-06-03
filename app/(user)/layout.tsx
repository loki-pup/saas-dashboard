import React from "react";

export default function UserLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="container max-w-screen-xl mx-auto py-10">{children}</div>
    )
}