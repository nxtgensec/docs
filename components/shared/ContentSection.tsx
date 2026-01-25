import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
}

export function ContentSection({ children, className }: ContentSectionProps) {
  return (
    <section className={cn("container py-12 md:py-16", className)}>
      {children}
    </section>
  );
}
