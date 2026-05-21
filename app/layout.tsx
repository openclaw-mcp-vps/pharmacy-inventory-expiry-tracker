import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PharmTrack — Track Medication Expiry Dates Automatically',
  description: 'Scan pharmacy inventory, predict medication expiry, and calculate waste costs. Built for independent pharmacy owners.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e966cc39-bc9d-4667-bca0-0d8d2dd35e30"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
