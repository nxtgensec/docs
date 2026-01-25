import { Linkedin, Twitter, Github } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export function TeamMemberCard({
  name,
  role,
  bio,
  imageUrl,
  linkedin,
  twitter,
  github,
}: TeamMemberCardProps) {
  return (
    <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
      <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-muted-foreground">
            {name.split(" ").map((n) => n[0]).join("")}
          </div>
        )}
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-primary text-sm font-medium mb-2">{role}</p>
        <p className="text-muted-foreground text-sm mb-4">{bio}</p>
        <div className="flex justify-center gap-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
