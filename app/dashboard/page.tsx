import { currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";

export default async function Page() {
    const user = await currentUser();
    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            {user ? (
                <div>
                    <p>Hello, {user.firstName} {user.lastName}!</p>
                    <SignOutButton>
                        <button>Sign Out</button>
                    </SignOutButton>
                </div>
                
                

            ) : (
                <p>Please sign in to access your dashboard.</p>
            )}
        </div>
    );
}