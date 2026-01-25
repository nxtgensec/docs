import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-card/50">
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight animate-fade-in">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl animate-fade-in">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
