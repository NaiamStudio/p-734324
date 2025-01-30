import { cn } from "@/lib/utils"

interface SocialIconsProps {
  className?: string
}

export const SocialIcons = ({ className }: SocialIconsProps) => {
  return (
    <div className={cn("flex flex-col items-start gap-2", className)}>
      <a href="#" className="text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
        <img src="/lovable-uploads/boxrec.png" alt="Bruno Giletta Box Rec" className="h-auto w-auto max-w-[308.8px] max-h-[208.8px]" />
      </a>
      <div className="flex gap-1">
        <a href="https://instagram.com/soybrunogiletta" className="text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
          <img src="/lovable-uploads/instagram.png" alt="Bruno Giletta Instagram" className="h-auto w-auto max-w-[144px] max-h-[144px]" />
        </a>
        <a href="https://www.facebook.com/lanochedeboxeo" className="text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
          <img src="/lovable-uploads/facebook.png" alt="Bruno Giletta Facebook" className="h-auto w-auto max-w-[144px] max-h-[144px]" />
        </a>
        <a href="https://www.linkedin.com/in/bruno-giletta-406588249/?trk=public_profile_browsemap&originalSubdomain=mt" className="text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
          <img src="/lovable-uploads/linkedin.png" alt="Bruno Giletta Linkedin" className="h-auto w-auto max-w-[144px] max-h-[144px]" />
        </a>
      </div>
    </div>
  )
}