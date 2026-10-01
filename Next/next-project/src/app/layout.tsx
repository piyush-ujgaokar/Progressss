import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import ClientProvider from "@/ClientProvider";

export const metadata: Metadata = {
  title: "First next Full Stack Project",
  description: "This is my First ever Full stack project in next js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
