import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  imageUrl?: string;
}

export function ArticleCard({
  title,
  excerpt,
  date,
  category,
  slug,
  imageUrl,
}: ArticleCardProps) {
  return (
    <article className="group rounded-xl bg-card border border-border hover:border-primary/50 overflow-hidden transition-all duration-300">
      {imageUrl && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
            {category}
          </Badge>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {date}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{excerpt}</p>
        <Link
          to={slug}
          className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
        >
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
