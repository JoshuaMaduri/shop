"use client";

import { ClientProviderComponent } from "./ClerkProvider";
import { ApolloProviderComponent } from "./ApolloProvider";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ApolloProviderComponent>
            <ClientProviderComponent>
                {children}
            </ClientProviderComponent>
        </ApolloProviderComponent>
    )
}