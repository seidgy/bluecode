export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap', 'nuxt-gtag'],
  site: { "url": "https://workworkconsulting.com.br/" },
  sitemap: {
    hostname: 'https://workworkconsulting.com.br',
    gzip: true
  },
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'pt-br'
      },
      title: 'Work Work Consulting',
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Capacitações práticas em IA aplicadas ao mercado de trabalho, empreendedorismo e vendas online. Aprenda com cursos certificados e 100% online." },
        { name: "keywords", content: "capacitação digital, empregabilidade, empreendedorismo, inovação com IA, cursos online, trilha de aprendizagem, certificação digital, plataforma de aprendizagem, produtividade com IA, marketing digital com IA, vendas online, marca pessoal, currículos com IA, LinkedIn estratégico, infoprodutos, conteúdo profissional com IA" },
        { property: "og:title", content: "Work Work Consulting" },
        { property: "og:description", content: "Capacitações práticas em IA aplicadas ao mercado de trabalho, empreendedorismo e vendas online. Aprenda com cursos certificados e 100% online." },
        { property: "og:image", content: `/OG.jpg` },
        { property: "og:logo", content: `/work-work.svg` },
        { property: "og:url", content: "https://workworkconsulting.com.br" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Work Work Consulting" },
        { name: "twitter:description", content: "Capacitações práticas em IA aplicadas ao mercado de trabalho, empreendedorismo e vendas online. Aprenda com cursos certificados e 100% online." },
        { name: "twitter:image", content: `/OG.jpg` }       
      ],
      link: [
        // DNS prefetch for external resources
        { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
        { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
        // google fonts - optimized loading
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" },
        // Mobile favicon and app icons
        { rel: "icon", type: "image/svg", sizes: "16x16", href: "/favicon.svg" },
        { rel: "apple-touch-icon", sizes: "16x16", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon.ico" },
      ],
      script: [],
    }
  },
  css: [
    '~/assets/css/styles.scss'
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: {
          name: 'default',
          chunks: 'async',
          priority: -20,
          reuseExistingChunk: true
        },
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          test: /node_modules/,
          priority: -10,
          reuseExistingChunk: true
        }
      }
    }
  },
  ssr: false,
  experimental: {
    clientFallback: true
  }
})
