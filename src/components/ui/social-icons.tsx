import { cn } from "@/lib/utils"

interface SocialIconsProps {
  className?: string
}

export const SocialIcons = ({ className }: SocialIconsProps) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <a href="#" className="text-white hover:text-primary transition-colors">
        <img src="/lovable-uploads/34eae839-d921-4a04-b12a-d3d7ee764592.png" alt="Social Icon 1" className="w-8 h-8" />
      </a>
      <a href="#" className="text-white hover:text-primary transition-colors">
        <img src="/lovable-uploads/60b7e0bf-5acc-4d6c-883e-ca67c86350cd.png" alt="Social Icon 2" className="w-8 h-8" />
      </a>
      <a href="#" className="text-white hover:text-primary transition-colors">
        <img src="/lovable-uploads/64acad9f-8fe5-4020-807b-f5933b23900a.png" alt="Social Icon 3" className="w-8 h-8" />
      </a>
      <a href="#" className="text-white hover:text-primary transition-colors">
        <img src="/lovable-uploads/e1ca5387-c65c-431d-84f9-023420151bff.png" alt="Social Icon 4" className="w-8 h-8" />
      </a>
    </div>
  )
}