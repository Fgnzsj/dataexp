import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  BarChart3,
  ChevronRight,
  LineChart,
  PieChart,
  TrendingUp,
  BarChart,
  Layers,
  CheckCircle2,
  Menu,
  ArrowRight,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span>DataInsight</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">
              Serviços
            </Link>
            <Link href="#templates" className="text-sm font-medium hover:text-primary transition-colors">
              Templates
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:text-primary transition-colors">
              Depoimentos
            </Link>
            <Link href="#precos" className="text-sm font-medium hover:text-primary transition-colors">
              Preços
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="#contato">Fale Conosco</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transforme seus dados em decisões estratégicas
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Consultoria especializada e templates de dashboards para impulsionar seu negócio com análises de
                    dados precisas e acionáveis.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#contato">
                      Agendar Consultoria
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#templates">Ver Templates</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute -top-12 -left-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Dashboard Analytics"
                  className="relative rounded-lg border shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Nossos Serviços
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Soluções completas em análise de dados
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Oferecemos consultoria especializada e ferramentas para transformar seus dados em insights valiosos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <LineChart className="h-10 w-10 text-primary" />
                  <CardTitle className="text-xl">Consultoria Estratégica</CardTitle>
                  <CardDescription>Análise personalizada para seu negócio com recomendações acionáveis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Diagnóstico completo de dados</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Implementação de KPIs estratégicos</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Treinamento para equipes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Suporte contínuo especializado</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="#contato">Solicitar Proposta</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart className="h-10 w-10 text-primary" />
                  <CardTitle className="text-xl">Templates de Dashboards</CardTitle>
                  <CardDescription>Soluções prontas para visualização e análise de dados</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Dashboards para diversos setores</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Personalização conforme necessidade</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Compatível com várias plataformas</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Atualizações regulares</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="#templates">Ver Templates</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section id="templates" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Templates
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Dashboards prontos para uso</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Templates profissionais para diferentes setores e necessidades de análise.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Vendas & Marketing",
                  description: "Acompanhe métricas de vendas, funil de conversão e ROI de campanhas",
                  icon: TrendingUp,
                },
                {
                  title: "Financeiro",
                  description: "Visualize fluxo de caixa, receitas, despesas e projeções financeiras",
                  icon: PieChart,
                },
                {
                  title: "Operações",
                  description: "Monitore produtividade, eficiência e indicadores operacionais",
                  icon: BarChart3,
                },
                {
                  title: "E-commerce",
                  description: "Análise de vendas online, comportamento do cliente e estoque",
                  icon: LineChart,
                },
                {
                  title: "RH & Pessoas",
                  description: "Indicadores de desempenho, engajamento e desenvolvimento de equipes",
                  icon: Layers,
                },
                {
                  title: "Personalizado",
                  description: "Desenvolvemos templates específicos para seu negócio",
                  icon: BarChart,
                },
              ].map((template, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-0">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <template.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{template.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{template.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="#contato">
                        Ver Detalhes
                        <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Depoimentos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">O que nossos clientes dizem</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Veja como ajudamos empresas a transformar seus dados em resultados.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "A consultoria transformou completamente nossa visão sobre os dados da empresa. Agora tomamos decisões muito mais embasadas.",
                  author: "Ana Silva",
                  role: "Diretora de Marketing, TechCorp",
                },
                {
                  quote:
                    "Os templates de dashboard economizaram meses de desenvolvimento interno. Implementamos em semanas o que levaria um ano.",
                  author: "Carlos Mendes",
                  role: "CEO, Retail Solutions",
                },
                {
                  quote:
                    "O suporte contínuo e as atualizações dos templates mantêm nossa análise sempre atualizada com as melhores práticas.",
                  author: "Mariana Costa",
                  role: "Gerente de BI, Finance Group",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <CardTitle className="text-base">{testimonial.author}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="precos" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Preços
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Planos para todos os tamanhos de negócio
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Escolha o plano ideal para suas necessidades de análise de dados.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Básico</CardTitle>
                  <div className="text-3xl font-bold">R$1.990</div>
                  <CardDescription>Ideal para pequenas empresas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>1 template de dashboard</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Consultoria inicial (4h)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Suporte por 30 dias</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>1 revisão de implementação</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="#contato">Contratar</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-primary">
                <CardHeader className="bg-primary text-primary-foreground">
                  <div className="text-sm font-medium uppercase">Mais Popular</div>
                  <CardTitle>Profissional</CardTitle>
                  <div className="text-3xl font-bold">R$4.990</div>
                  <CardDescription className="text-primary-foreground/90">Para empresas em crescimento</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 pt-6">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>3 templates de dashboard</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Consultoria completa (12h)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Suporte por 90 dias</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>3 revisões de implementação</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Treinamento para equipe (4h)</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="#contato">Contratar</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Empresarial</CardTitle>
                  <div className="text-3xl font-bold">Personalizado</div>
                  <CardDescription>Para grandes organizações</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Templates ilimitados</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Consultoria estratégica completa</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Suporte dedicado</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Implementação personalizada</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      <span>Programa de treinamento completo</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="#contato">Solicitar Proposta</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contato" className="py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Pronto para transformar seus dados em resultados?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl text-primary-foreground/90">
                  Entre em contato hoje mesmo e descubra como podemos ajudar seu negócio.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input type="text" placeholder="Nome" className="bg-primary-foreground text-foreground" />
                  <Input type="email" placeholder="Email" className="bg-primary-foreground text-foreground" />
                  <Input type="tel" placeholder="Telefone" className="bg-primary-foreground text-foreground" />
                  <Button type="submit" variant="secondary" className="w-full">
                    Solicitar Contato
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-bold">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>DataInsight</span>
            </div>
            <p className="text-sm text-muted-foreground">Transformando dados em decisões estratégicas desde 2018.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <Link href="#servicos" className="text-sm hover:underline underline-offset-4">
              Serviços
            </Link>
            <Link href="#templates" className="text-sm hover:underline underline-offset-4">
              Templates
            </Link>
            <Link href="#depoimentos" className="text-sm hover:underline underline-offset-4">
              Depoimentos
            </Link>
            <Link href="#precos" className="text-sm hover:underline underline-offset-4">
              Preços
            </Link>
            <Link href="#contato" className="text-sm hover:underline underline-offset-4">
              Contato
            </Link>
          </div>
        </div>
        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DataInsight. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
