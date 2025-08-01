import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { App } from "./components/App";

export const metadata: Metadata = {
  title: "BulkStack",
  description: "Your one-stop shop for all things bulk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <App>{children}</App>
    </Providers>
  );
}
