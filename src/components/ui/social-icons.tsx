import { cn } from "@/lib/utils"

interface SocialIconsProps {
  className?: string
}

export const SocialIcons = ({ className }: SocialIconsProps) => {
  return (
    <div className={cn("flex flex-col items-start gap-2", className)}>
      <a href="#" className="text-white hover:text-primary transition-colors">
      <img src="/lovable-uploads/60b7e0bf-5acc-4d6c-883e-ca67c86350cd.png" alt="Social Icon 1" className="h-auto w-auto max-w-[308.8px] max-h-[208.8px]" />
      </a>
      <div className="flex gap-1">
      <a href="#" className="text-white hover:text-primary transition-colors">
        <img src="/lovable-uploads/instagram.png" alt="Social Icon 2" className="h-auto w-auto max-w-[144px] max-h-[144px]" />
      </a>
      <a href="#" className="text-white hover:text-primary transition-colors">
        <img src="/lovable-uploads/facebook.png" alt="Social Icon 3" className="h-auto w-auto max-w-[144px] max-h-[144px]" />
      </a>
      <a href="#" className="text-white hover:text-primary transition-colors">
        <img src="/lovable-uploads/linkedin.png" alt="Social Icon 3" className="h-auto w-auto max-w-[144px] max-h-[144px]" />
      </a>
      </div>
    </div>
  )
}