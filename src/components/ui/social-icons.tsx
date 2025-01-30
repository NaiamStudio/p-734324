import { cn } from "@/lib/utils"

interface SocialIconsProps {
  className?: string
}

export const SocialIcons = ({ className }: SocialIconsProps) => {
  return (
    <div className={cn("flex flex-col items-start gap-2", className)}>
      <a href="https://boxrec.com/en/manager/1255795" className="text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
        <img src="/lovable-uploads/boxrec.png" alt="Bruno Giletta BoxRec" className="h-auto w-auto max-w-[268.8px] max-h-[608.8px]" />
      </a>
      <div className="flex gap-1">
        <a href="https://instagram.com/soybrunogiletta" className="text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
          <img src="/lovable-uploads/instagram.png" alt="Bruno Giletta Instagram" className="h-auto w-auto max-w-[90px] max-h-[144px]" />
        </a>
        <a href="https://www.facebook.com/lanochedeboxeo" className="text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
          <img src="/lovable-uploads/facebook.png" alt="Bruno Giletta Facebook" className="h-auto w-auto max-w-[90px] max-h-[144px]" />
        </a>
        <a href="https://www.linkedin.com/in/bruno-giletta-406588249/?trk=public_profile_browsemap&originalSubdomain=mt" className="text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
          <img src="/lovable-uploads/linkedin.png" alt="Bruno Giletta Linkedin" className="h-auto w-auto max-w-[90px] max-h-[144px]" />
        </a>

      </div>
      <div className="flex gap-1">
        <a href="https://www.youtube.com/@Soybrunogiletta" className="text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
          <img src="/lovable-uploads/youtube.png" alt="Bruno Giletta Youtube" className="h-auto w-auto max-w-[90px] max-h-[144px]" />
        </a>
        <a href="https://x.com/gilettabruno" className="text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
          <img src="/lovable-uploads/X.png" alt="Bruno Giletta X" className="h-auto w-auto max-w-[90px] max-h-[144px]" />
        </a>
        <a href="https://www.twitch.tv/soybrunogiletta" className="text-white hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
          <img src="/lovable-uploads/twitch.png" alt="Bruno Giletta Twitch" className="h-auto w-auto max-w-[90px] max-h-[144px]" />
        </a>
      </div>
    </div>
  )
}

