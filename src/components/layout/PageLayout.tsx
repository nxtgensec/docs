import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex w-full">
      <Sidebar />
      <main className="flex-1 lg:ml-72 min-h-screen">
        {children}
      </main>
    </div>
  );
}
