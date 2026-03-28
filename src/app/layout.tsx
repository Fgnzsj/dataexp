import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://fgnzsj.github.io/dataexp'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'DataInsight',
      url: SITE_URL,
      description:
        'Consultoria especializada em dados e templates de dashboards para Power BI, Tableau e Google Data Studio.',
      foundingDate: '2018',
      areaServed: 'BR',
      knowsLanguage: 'pt-BR',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: 'Portuguese',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'DataInsight',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#consultoria`,
      name: 'Consultoria Estratégica de Dados',
      provider: { '@id': `${SITE_URL}/#organization` },
      description:
        'Diagnóstico profundo dos seus dados com estratégia clara de implementação e KPIs que geram resultado real.',
      serviceType: 'Data Analytics Consulting',
      areaServed: 'BR',
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#templates`,
      name: 'Templates de Dashboards',
      provider: { '@id': `${SITE_URL}/#organization` },
      description:
        'Dashboards profissionais compatíveis com Power BI, Tableau e Google Data Studio, prontos para usar em dias.',
      serviceType: 'Business Intelligence Dashboard',
      areaServed: 'BR',
    },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'DataInsight - Consultoria e Templates de Dashboards',
    template: '%s | DataInsight',
  },
  description:
    'Consultoria especializada e templates prontos para Power BI, Tableau e Google Data Studio. Transforme dados em decisões estratégicas.',
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/`,
    title: 'DataInsight - Consultoria e Templates de Dashboards',
    description:
      'Consultoria especializada e templates prontos para Power BI, Tableau e Google Data Studio. Transforme dados em decisões estratégicas com mais de 200 empresas atendidas desde 2018.',
    locale: 'pt_BR',
    siteName: 'DataInsight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataInsight - Consultoria e Templates de Dashboards',
    description:
      'Consultoria especializada e templates de dashboards para impulsionar seu negócio com análises de dados precisas.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/` },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        {/* Web3Forms hCaptcha — free plan sitekey, loaded only when needed */}
        <script src="https://web3forms.com/client/script.js" async defer />
      </body>
    </html>
  )
}
