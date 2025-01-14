import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface AppCardProps {
  name: string
  href: string
  isReady: boolean
  icon: React.ElementType
  description: string
}

export function AppCard({ name, href, isReady, icon: Icon, description }: AppCardProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={isReady ? href : '#'} className="block group">
            <Card className={`relative h-full transition-all duration-300 hover:shadow-md hover:scale-105 hover:shadow-glow ${isReady ? 'bg-card' : 'bg-muted'}`}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <Icon className="h-6 w-6 text-primary" />
                  {isReady && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
                <CardTitle className="mt-2 text-lg font-semibold">{name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
                {!isReady && (
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                    <p className="text-sm font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full animate-pulse">
                      Coming Soon
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

