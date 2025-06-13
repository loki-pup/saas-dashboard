import { Button } from "@/components/ui/button";
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
} from '@clerk/nextjs'
import Link from "next/link";


const Hero = () => {
    return (
        <section className="grow">
            <div>
                <div>
                    <h1>
                        Collect doggie feedback seamlessly
                    </h1>
                    <p>
                        Easily integrate Bozyu and start collecting feedback today.
                    </p>
                </div>
                <div>
                <SignedOut>
                            <SignUpButton>
                                <Button className='bg-black ml-2'>Get Started</Button>
                            </SignUpButton>
                            </SignedOut>
                            <SignedIn>
                            <Button>Dashboard</Button>
                        </SignedIn>
                </div>
            </div>
        </section>
    )
}

export default Hero;