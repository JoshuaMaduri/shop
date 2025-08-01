"use client";
import { ClerkProvider } from '@clerk/nextjs';

interface ClientProvidersProps {
    children: React.ReactNode;
}

export function ClientProviderComponent({children}: ClientProvidersProps){
    return (
        <ClerkProvider>{children}</ClerkProvider>
    );
}