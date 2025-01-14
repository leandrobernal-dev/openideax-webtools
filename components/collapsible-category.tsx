"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { AppCard } from './app-card'

interface CollapsibleCategoryProps {
  name: string
  icon: React.ElementType
  apps: Array<{
    name: string
    href: string
    isReady: boolean
    icon: React.ElementType
    description: string
  }>
}

export function CollapsibleCategory({ name, icon: Icon, apps }: CollapsibleCategoryProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <section className="mb-8 animate-fadeIn">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left mb-4 p-2 rounded-md hover:bg-muted transition-colors duration-200"
      >
        <h2 className="text-2xl font-bold flex items-center">
          <Icon className="mr-2 h-6 w-6 text-primary" />
          {name}
        </h2>
        {isExpanded ? <ChevronUp className="text-muted-foreground" /> : <ChevronDown className="text-muted-foreground" />}
      </button>
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <AppCard key={app.name} {...app} />
          ))}
        </div>
      )}
    </section>
  )
}

