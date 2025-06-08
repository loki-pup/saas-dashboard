import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import { Button } from './ui/button';
import HeaderMenu from './header-menu';


const PageHeader = () => {
    return (
        <header className='sticky inset-x-0 top-0 z-30 w-full transition-all'>
            <div className='w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto border-b'>
                <div className='flex h-14 items-center justify-between'>
                    <h1 className='text-3xl font-bold'>Bozyu</h1>
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
                            <HeaderMenu />
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default PageHeader;