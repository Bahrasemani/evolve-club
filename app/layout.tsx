import './globals.css'

export const metadata = {
  title: 'Evolve Club',
  description: 'Startup community website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}