import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import { Logo } from '@/components/logo'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OpenIdeaX - Web Application Collection',
  description: 'A collection of useful web applications for productivity, development, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient text-foreground">
            <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-sm shadow-sm">
              <div className="container mx-auto p-4 flex justify-between items-center">
                <Logo />
                <ModeToggle />
              </div>
            </header>
            <main className="container mx-auto p-4">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

