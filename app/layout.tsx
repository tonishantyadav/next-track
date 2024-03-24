import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'
import QueryClientProvider from './QueryClientProvider'
import AuthProvider from './auth/AuthProvider'
import NavBar from '../components/NavBar'
import { Toaster } from '../components/ui'
import './globals.css'
import { ThemeProvider } from './ThemeProvider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
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
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <NavBar />
              <main className="container py-5">{children}</main>
              <Toaster />
            </ThemeProvider>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
