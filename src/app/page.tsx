'use client'

import { useState } from 'react'
import DashboardMockup from '@/components/DashboardMockup'

const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#templates', label: 'Templates' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#precos', label: 'Preços' },
]

const SERVICES = [
  {
    badge: 'Consultoria',
    title: 'Consultoria Estratégica',
    description:
      'Diagnóstico profundo dos seus dados com estratégia clara de implementação e KPIs que geram resultado real.',
    features: [
      'Diagnóstico completo de dados',
      'Implementação de KPIs estratégicos',
      'Treinamento para equipes',
      'Suporte contínuo especializado',
    ],
    cta: 'Solicitar Proposta',
    href: '#contato',
  },
  {
    badge: 'Produto',
    title: 'Templates de Dashboards',
    description:
      'Dashboards profissionais compatíveis com Power BI, Tableau e Google Data Studio — prontos para usar em dias.',
    features: [
      'Dashboards para diversos setores',
      'Personalização conforme necessidade',
      'Compatível com várias plataformas',
      'Atualizações regulares',
    ],
    cta: 'Ver Templates',
    href: '#templates',
  },
]

const TEMPLATES = [
  {
    title: 'Vendas & Marketing',
    description: 'Acompanhe métricas de vendas, funil de conversão e ROI de campanhas',
    icon: '📈',
  },
  {
    title: 'Financeiro',
    description: 'Visualize fluxo de caixa, receitas, despesas e projeções financeiras',
    icon: '💰',
  },
  {
    title: 'Operações',
    description: 'Monitore produtividade, eficiência e indicadores operacionais',
    icon: '⚙️',
  },
  {
    title: 'E-commerce',
    description: 'Análise de vendas online, comportamento do cliente e estoque',
    icon: '🛒',
  },
  {
    title: 'RH & Pessoas',
    description: 'Indicadores de desempenho, engajamento e desenvolvimento de equipes',
    icon: '👥',
  },
  {
    title: 'Personalizado',
    description: 'Desenvolvemos templates específicos para seu negócio',
    icon: '✨',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Analisamos suas fontes de dados, processos atuais e principais dores do negócio.',
  },
  {
    number: '02',
    title: 'Customização',
    description: 'Adaptamos os templates e KPIs à sua realidade, ferramentas e objetivos.',
  },
  {
    number: '03',
    title: 'Implementação',
    description: 'Entregamos os dashboards conectados às suas fontes em dias, não meses.',
  },
  {
    number: '04',
    title: 'Suporte',
    description: 'Treinamos sua equipe e acompanhamos a evolução com suporte contínuo.',
  },
]

const INTEGRATIONS = [
  { name: 'Power BI', color: 'text-yellow-600' },
  { name: 'Tableau', color: 'text-blue-600' },
  { name: 'Google Data Studio', color: 'text-green-600' },
  { name: 'Metabase', color: 'text-indigo-600' },
  { name: 'Looker', color: 'text-purple-600' },
  { name: 'Grafana', color: 'text-orange-600' },
]

const TESTIMONIALS = [
  {
    initials: 'AS',
    name: 'Ana Silva',
    role: 'Diretora de Marketing, TechCorp',
    text: 'Em 6 semanas de consultoria, identificamos gargalos que custavam R$80k/mês. Os dashboards do DataInsight mudaram como toda a diretoria enxerga o negócio.',
  },
  {
    initials: 'CM',
    name: 'Carlos Mendes',
    role: 'CEO, Retail Solutions',
    text: 'Implementamos o dashboard de vendas em 2 semanas. Antes levávamos 3 dias para fechar o relatório mensal — hoje é automático e atualizado em tempo real.',
  },
  {
    initials: 'MC',
    name: 'Mariana Costa',
    role: 'Gerente de BI, Finance Group',
    text: 'Nossa equipe de BI ganhou autonomia total. O treinamento foi objetivo e as atualizações periódicas garantem que estamos sempre usando o que há de melhor no mercado.',
  },
]

const PRICING = [
  {
    name: 'Básico',
    price: 'R$1.990',
    popular: false,
    features: [
      '1 template de dashboard',
      'Consultoria inicial (4h)',
      'Suporte por 30 dias',
      '1 revisão de implementação',
    ],
    cta: 'Contratar',
  },
  {
    name: 'Profissional',
    price: 'R$4.990',
    popular: true,
    features: [
      '3 templates de dashboard',
      'Consultoria completa (12h)',
      'Suporte por 90 dias',
      '3 revisões de implementação',
      'Treinamento para equipe (4h)',
    ],
    cta: 'Contratar',
  },
  {
    name: 'Empresarial',
    price: 'Personalizado',
    popular: false,
    features: [
      'Templates ilimitados',
      'Consultoria estratégica completa',
      'Suporte dedicado',
      'Implementação personalizada',
      'Programa de treinamento completo',
    ],
    cta: 'Solicitar Proposta',
  },
]

const FAQS = [
  {
    q: 'Quanto tempo leva para implementar um dashboard?',
    a: 'Para templates do catálogo, a implementação leva de 3 a 10 dias úteis após o diagnóstico inicial. Projetos personalizados têm prazo definido na proposta, geralmente entre 2 e 6 semanas.',
  },
  {
    q: 'Os templates funcionam com minha ferramenta atual?',
    a: 'Sim. Nossos templates são compatíveis com Power BI, Tableau, Google Data Studio, Metabase, Looker e Grafana. Indicamos a melhor opção para o seu contexto durante o diagnóstico.',
  },
  {
    q: 'Preciso ter uma equipe técnica para usar os dashboards?',
    a: 'Não. O treinamento incluído nos planos capacita qualquer colaborador a operar e interpretar os dashboards. Para manutenções técnicas, nosso suporte está disponível.',
  },
  {
    q: 'Como funciona o suporte após a entrega?',
    a: 'O suporte cobre dúvidas de uso, pequenos ajustes e atualizações de dados. Para o plano Empresarial, há um gerente de conta dedicado com SLA de resposta em até 4 horas.',
  },
  {
    q: 'Os dados da minha empresa ficam seguros?',
    a: 'Trabalhamos com as ferramentas que você já utiliza — seus dados permanecem no seu ambiente. Assinamos NDA e seguimos boas práticas de LGPD em todos os projetos.',
  },
]

const inputClass =
  'w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="flex min-h-screen flex-col">
      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <a href="#" className="text-xl font-bold tracking-tight">
            DataInsight
          </a>

          {/* Desktop nav */}
          <nav className="hidden gap-6 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contato"
              className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
            >
              Fale Conosco
            </a>
            <button
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
              Menu
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t bg-background px-4 py-4 md:hidden">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              Fale Conosco
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center gap-4">
                <span className="inline-flex w-fit items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Consultoria de Dados
                </span>
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  Transforme seus dados em decisões estratégicas
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Consultoria especializada e templates prontos para Power BI, Tableau e Google Data
                  Studio. Transforme dados em decisões estratégicas com mais de 200 empresas atendidas
                  desde 2018.
                </p>

                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Agendar Consultoria
                  </a>
                  <a
                    href="#templates"
                    className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    Ver Templates
                  </a>
                </div>

                {/* Metrics */}
                <div className="flex gap-8 pt-2">
                  {[
                    { value: '+200', label: 'Empresas Atendidas' },
                    { value: '8+', label: 'Anos de Experiência' },
                    { value: '98%', label: 'Satisfação' },
                  ].map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-2xl font-bold">{m.value}</div>
                      <div className="text-xs text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <DashboardMockup />
            </div>
          </div>
        </section>

        {/* ── SERVIÇOS ── */}
        <section id="servicos" className="w-full bg-muted/30 py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-10 flex flex-col items-center gap-2 text-center">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Nossos Serviços
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Soluções para cada etapa da sua jornada de dados
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {SERVICES.map((s) => (
                <div key={s.title} className="flex flex-col rounded-xl border bg-background p-6 shadow-sm">
                  <span className="mb-4 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {s.badge}
                  </span>
                  <h3 className="mb-2 text-2xl font-semibold">{s.title}</h3>
                  <p className="mb-4 text-muted-foreground">{s.description}</p>
                  <ul className="mb-6 flex flex-col gap-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={s.href}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    {s.cta}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-10 flex flex-col items-center gap-2 text-center">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Processo
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Como funciona</h2>
              <p className="max-w-[600px] text-muted-foreground">
                Do diagnóstico à operação em produção — um processo claro, sem surpresas.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, i) => (
                <div key={step.number} className="relative flex flex-col gap-3">
                  {i < STEPS.length - 1 && (
                    <div className="absolute right-0 top-5 hidden h-0.5 w-1/2 translate-x-full bg-border lg:block" />
                  )}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEMPLATES ── */}
        <section id="templates" className="w-full bg-muted/30 py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-10 flex flex-col items-center gap-2 text-center">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Templates
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Dashboards para cada setor
              </h2>
              <p className="max-w-[600px] text-muted-foreground">
                Soluções prontas para os principais setores, customizáveis para o seu negócio.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {TEMPLATES.map((t) => (
                <div
                  key={t.title}
                  className="group flex flex-col gap-2 rounded-xl border bg-background p-6 transition-shadow hover:shadow-md"
                >
                  <div className="text-3xl">{t.icon}</div>
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.description}</p>
                  <a
                    href="#contato"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Ver Detalhes
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTEGRAÇÕES ── */}
        <section className="w-full py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
              Compatível com as principais plataformas de BI
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              {INTEGRATIONS.map((tool) => (
                <span key={tool.name} className={`text-lg font-semibold ${tool.color}`}>
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEPOIMENTOS ── */}
        <section id="depoimentos" className="w-full bg-muted/30 py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-10 flex flex-col items-center gap-2 text-center">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Depoimentos
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                O que nossos clientes dizem
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="flex flex-col gap-4 rounded-xl border bg-background p-6 shadow-sm">
                  <p className="text-muted-foreground">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PREÇOS ── */}
        <section id="precos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-10 flex flex-col items-center gap-2 text-center">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Preços
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Planos que se adaptam ao seu momento
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {PRICING.map((p) => (
                <div
                  key={p.name}
                  className={`relative flex flex-col rounded-xl border p-6 ${
                    p.popular ? 'border-primary bg-primary text-primary-foreground shadow-lg' : 'bg-background'
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary border border-background px-3 py-1 text-xs font-medium text-primary-foreground shadow">
                      Mais Popular
                    </span>
                  )}
                  <h3 className="mb-1 text-xl font-bold">{p.name}</h3>
                  <div className="mb-4 text-3xl font-bold">{p.price}</div>
                  <ul className="mb-6 flex flex-col gap-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <svg
                          className={`h-4 w-4 shrink-0 ${p.popular ? 'text-primary-foreground' : 'text-primary'}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contato"
                    className={`mt-auto inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                      p.popular
                        ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    {p.cta}
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Precisa de algo diferente?{' '}
              <a href="#contato" className="font-medium text-primary underline underline-offset-2">
                Fale conosco
              </a>{' '}
              para uma proposta personalizada.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="w-full bg-muted/30 py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <div className="mb-10 flex flex-col items-center gap-2 text-center">
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                FAQ
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Perguntas frequentes</h2>
            </div>

            <div className="flex flex-col divide-y rounded-xl border bg-background">
              {FAQS.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium hover:bg-muted/50"
                  >
                    {faq.q}
                    <svg
                      className={`h-4 w-4 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4 text-sm text-muted-foreground">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTATO ── */}
        <section id="contato" className="w-full bg-primary py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center gap-4 text-primary-foreground">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Pronto para transformar seus dados em resultados?
                </h2>
                <p className="text-primary-foreground/80">
                  Atendemos até 10 novos clientes por mês. Garanta sua vaga e receba um diagnóstico
                  gratuito dos seus dados.
                </p>
                <div className="flex flex-col gap-3 pt-2">
                  {[
                    '✓ Diagnóstico gratuito sem compromisso',
                    '✓ Resposta em até 24 horas úteis',
                    '✓ Sem contrato de fidelidade',
                  ].map((item) => (
                    <p key={item} className="text-sm text-primary-foreground/90">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-primary-foreground p-6 text-foreground shadow-lg">
                <h3 className="mb-4 text-lg font-semibold">Solicite seu diagnóstico gratuito</h3>
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="flex flex-col gap-3"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ''}
                  />
                  <input type="hidden" name="subject" value="Novo contato — DataInsight" />
                  <input type="hidden" name="from_name" value="DataInsight Site" />
                  <input type="text" name="nome" placeholder="Nome completo" required className={inputClass} />
                  <input type="email" name="email" placeholder="E-mail profissional" required className={inputClass} />
                  <input type="tel" name="telefone" placeholder="WhatsApp / Telefone" className={inputClass} />
                  <textarea
                    name="mensagem"
                    rows={3}
                    placeholder="Conte brevemente o seu maior desafio com dados (opcional)"
                    className={`${inputClass} resize-none`}
                  />
                  <div className="h-captcha" data-captcha="true" />
                  <button
                    type="submit"
                    className="mt-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Solicitar Diagnóstico Gratuito
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    Seus dados são protegidos conforme a LGPD.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="w-full border-t py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="mb-2 text-lg font-bold">DataInsight</p>
              <p className="text-sm text-muted-foreground">
                Transformando dados em decisões estratégicas desde 2018.
              </p>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold">Navegação</p>
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold">Legal</p>
              <div className="flex flex-col gap-2">
                <a href="/privacidade" className="text-sm text-muted-foreground hover:text-foreground">
                  Política de Privacidade
                </a>
                <a href="/termos" className="text-sm text-muted-foreground hover:text-foreground">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} DataInsight. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
