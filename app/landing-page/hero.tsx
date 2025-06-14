import { Button } from "@/components/ui/button";
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
} from '@clerk/nextjs'
import Link from "next/link";
import { LogIn, Github } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="grow">
            <div className="container mx-auto px-4 mb-10 md:my-26 flex flex-col md:flex-row gap-10 md:gap-20 justify-center">
                <div className="flex flex-col max-w-sm justify-center">
                <div className="mb-8">
                    <h1 className="mb-5 text-5xl font-extrabold leading-tight">
                        Collect doggie feedback seamlessly
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Easily integrate Bozyu and start collecting feedback today.
                    </p>
                </div>
                <div>
                <SignedOut>
                            <SignUpButton>
                                <div className="flex gap-3">
                                <Button className='bg-black ml-2 cursor-pointer'>
                                    <LogIn className="w-4 h-4 mr-2"/>Get Started</Button>
                                <Button variant="secondary" asChild>
                                    <Link href="https://loki-pup.github.io/react-portfolio/canto">
                                    <Github className="w-4 h-4 mr-2"/>Github
                                    </Link></Button>   
                                </div>
                            </SignUpButton>
                            </SignedOut>
                            <SignedIn>
                            <Button asChild><Link href="/dashboard">Dashboard</Link></Button>
                        </SignedIn>
                </div>
                </div>
                <div className="flex-1 max-w-[600px]">
                    <Image src={'/bozyu1.gif'} alt="Bozyu Demo" layout={'responsive'} unoptimized={true} width={175} height={98}/>
                </div>
            </div>
        </section>
    )
}

export default Hero;