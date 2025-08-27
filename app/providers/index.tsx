"use client";

import { ClientProviderComponent } from "./ClerkProvider";
import { ApolloProviderComponent } from "./ApolloProvider";
import { RecoilRoot } from "recoil";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <RecoilRoot>
            <ApolloProviderComponent>
                <ClientProviderComponent>
                    {children}
                </ClientProviderComponent>
            </ApolloProviderComponent>
        </RecoilRoot>
    )
}