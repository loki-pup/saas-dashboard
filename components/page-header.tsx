import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import { Button } from './ui/button';


const PageHeader = () => {
    return (
        <header className='sticky inset-x-0 top-0 z-30 w-full transition-all'>
            <div className='w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto border-b'>
                <div className='flex h-14 items-center justify-between'>
                    <h1>Bozyu</h1>
                    <div>
                        <SignedOut>
                            <SignInButton>
                                <Button className='bg-black'>Sign In</Button>
                            </SignInButton>
                            <SignUpButton>
                                <Button className='bg-black ml-2'>Sign Up</Button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default PageHeader;