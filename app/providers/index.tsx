"use client";

import { ClientProviderComponent } from "./ClerkProvider";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ClientProviderComponent>
            {children}
        </ClientProviderComponent>
    )
}