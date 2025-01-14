import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">OpenIdeaX</span>
        <span className="text-xs text-muted-foreground">web tools</span>
      </div>
    </Link>
  )
}

