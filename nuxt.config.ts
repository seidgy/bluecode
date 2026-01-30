export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap', 'nuxt-gtag'],
  site: { "url": "https://bluecode.com/" },
  sitemap: {
    hostname: 'https://bluecode.com',
    gzip: true
  },
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'pt-br'
      },
      title: 'Blue Code',
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Criamos tecnologia que acelera negócios, otimiza processos e impulsiona resultados com soluções digitais eficientes." },
        { name: "keywords", content: "tecnologia para negócios, soluções digitais, inovação tecnológica, aceleração de negócios, software para empresas, transformação digital" },
        { property: "og:title", content: "Blue Code" },
        { property: "og:description", content: "Criamos tecnologia que acelera negócios, otimiza processos e impulsiona resultados com soluções digitais eficientes." },
        { property: "og:image", content: `/OG.webp` },
        { property: "og:logo", content: `/images/bluecode.svg` },
        { property: "og:url", content: "https://bluecode.com" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Blue Code" },
        { name: "twitter:description", content: "Criamos tecnologia que acelera negócios, otimiza processos e impulsiona resultados com soluções digitais eficientes." },
        { name: "twitter:image", content: `/OG.webp` }
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
