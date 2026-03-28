# Learnings — DataInsight Landing Page Sessions

## Projeto
Landing page B2B estática (Next.js 14 + Tailwind CSS + TypeScript)
Hospedagem: GitHub Pages — `https://fgnzsj.github.io/dataexp/`
Repositório: `Fgnzsj/dataexp`, branch de trabalho: `claude/analyze-content-improvements-Xq0N5`

---

## Aprendizados Técnicos

### 1. GitHub Pages + Next.js: `.nojekyll` é obrigatório
**Problema:** CSS/JS não carregavam (página sem estilo).
**Causa:** GitHub Pages ativa Jekyll por padrão. Jekyll ignora silenciosamente qualquer arquivo/pasta que começa com `_` — incluindo `_next/static/css/` e `_next/static/chunks/`.
**Solução:** arquivo `.nojekyll` vazio em `docs/` (colocar em `public/` para ser copiado automaticamente a cada build).
```
touch public/.nojekyll
```

### 2. basePath e assetPrefix para GitHub Pages com distDir: 'docs'
**Padrão correto:**
```js
basePath: '/dataexp',          // nome do repositório
assetPrefix: '/dataexp/',      // trailing slash obrigatório
distDir: 'docs',
output: 'export',
trailingSlash: true,
```
**Erro comum:** usar `/fgnzsj.github.io/dataexp/docs` como basePath (era o valor gerado pelo v0.dev — resolve para URL inexistente).

### 3. Google Fonts não disponível em ambiente de build sem internet
**Solução:** usar `<link>` direto no HTML em vez de `next/font/google`.
```tsx
// NÃO funciona offline:
import { Inter } from 'next/font/google'

// Funciona sempre:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

### 4. Push para `main` bloqueado — só branches `claude/*` são permitidos
Fluxo de trabalho obrigatório:
1. Desenvolver em `claude/<nome>-<sessionId>`
2. Push para o feature branch
3. Criar PR → usuário faz merge para `main`
4. GitHub Pages reimplanta automaticamente após merge

### 5. Formulário estático + GitHub Pages: usar Web3Forms (free)
- Formspree free: 50/mês
- **Web3Forms free: 250/mês, sem cadastro** — só verificar email para receber access key
- Integração: `action="https://api.web3forms.com/submit"` + `<input type="hidden" name="access_key" value="...">`

### 6. hCaptcha via Web3Forms (free, sem conta hCaptcha)
```html
<!-- dentro do form -->
<div class="h-captcha" data-captcha="true"></div>
<!-- no final do body -->
<script src="https://web3forms.com/client/script.js" async defer></script>
```
Requer ativar em: Web3Forms dashboard → Settings → Block Spam → hCaptcha.
Sitekey free: `50b2fe65-b00b-4b9e-ad62-3ba471098be2` (não precisa configurar).

### 7. Editar arquivos compilados Next.js diretamente — limitações
Editar `docs/index.html` e `docs/index.txt` diretamente é frágil:
- Substituições byte a byte (encoding UTF-8 manual em Python)
- `index.txt` (payload RSC) precisa ser sincronizado com `index.html`
- **Preferível:** ter código-fonte e reconstruir com `npm run build`

### 8. JSON-LD no layout.tsx — dangerouslySetInnerHTML + `<head>` manual
Next.js 14 App Router não permite `<script>` arbitrário no `<head>` via Metadata API para JSON-LD.
Solução: injetar via `dangerouslySetInnerHTML` em `<head>` no `RootLayout`:
```tsx
<head>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
</head>
```

---

## Ações Pendentes do Usuário

| Ação | Detalhe |
|---|---|
| **Formspree → Web3Forms access key** | Já configurado com `ce88bb9e-a2e2-4329-8add-25d15f9f74c8` ✓ |
| **hCaptcha ativado** | Confirmado ✓ |
| **E-mails legais** | Substituir `privacidade@datainsight.com.br` e `contato@datainsight.com.br` pelos e-mails reais em `src/app/privacidade/page.tsx` e `src/app/termos/page.tsx` |
| **Screenshot real do dashboard** | Substituir `DashboardMockup.tsx` por imagem real quando disponível |
| **Logo** | Substituir texto "DataInsight" no header por SVG/imagem real |

---

## Roadmap Restante

| Sessão | Tema | Status |
|---|---|---|
| ~~1~~ | Melhorias de copy, SEO, formulário, robots.txt | ✅ |
| ~~2~~ | Reconstrução código-fonte Next.js + novas seções | ✅ |
| ~~3~~ | Cor, tipografia, mockup SVG, legal pages, sitemap, JSON-LD | ✅ |
| **4** | Conteúdo real — screenshot, logos de clientes, fotos depoimentos | ⏳ |
| **5** | Performance — Core Web Vitals, LCP, imagens WebP | ⏳ |

---

## Estrutura do Projeto

```
dataexp/
├── src/
│   ├── app/
│   │   ├── globals.css          # CSS vars (primary: hsl 221 83% 40%)
│   │   ├── layout.tsx           # Metadata, JSON-LD, Inter font, Web3Forms script
│   │   ├── page.tsx             # Página principal (todas as seções)
│   │   ├── privacidade/page.tsx # Política de Privacidade (LGPD)
│   │   └── termos/page.tsx      # Termos de Uso
│   └── components/
│       └── DashboardMockup.tsx  # SVG mockup do dashboard (hero)
├── public/
│   ├── .nojekyll               # OBRIGATÓRIO para GitHub Pages
│   ├── robots.txt
│   └── sitemap.xml
├── docs/                        # Build output (distDir) — servido pelo GitHub Pages
├── next.config.js               # basePath: /dataexp, assetPrefix: /dataexp/
└── package.json
```
