import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Page() {
    const { user } = await auth();
    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            {user ? (
                <p>Hello, {user.firstName} {user.lastName}!</p>
            ) : (
                <p>Please sign in to access your dashboard.</p>
            )}
        </div>
    );
}