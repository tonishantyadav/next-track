import NavBar from '@/components/NavBar'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import AuthProvider from './auth/AuthProvider'
import QueryClientProvider from './QueryClientProvider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  preload: true,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <QueryClientProvider>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <NavBar />
              <main className="p-5">{children}</main>
              <Toaster />
            </ThemeProvider>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
