import type { Metadata } from 'next'
import { Montserrat, Roboto } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] });
const roboto = Roboto({ weight: ['400', '500'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Barkin',
  description: 'Gestão de pessoas, portaria e estacionamento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
