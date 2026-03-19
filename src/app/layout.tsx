import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DataInsight - Consultoria e Templates de Dashboards',
  description:
    'Consultoria especializada e templates prontos para Power BI, Tableau e Google Data Studio. Transforme dados em decisões estratégicas.',
  openGraph: {
    type: 'website',
    url: 'https://fgnzsj.github.io/dataexp/docs/',
    title: 'DataInsight - Consultoria e Templates de Dashboards',
    description:
      'Consultoria especializada e templates prontos para Power BI, Tableau e Google Data Studio. Transforme dados em decisões estratégicas com mais de 200 empresas atendidas desde 2018.',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataInsight - Consultoria e Templates de Dashboards',
    description:
      'Consultoria especializada e templates de dashboards para impulsionar seu negócio com análises de dados precisas.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://fgnzsj.github.io/dataexp/docs/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
