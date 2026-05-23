export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      whatsappNumber: process.env.WHATSAPP_NUMBER,
      whatsappMessage: process.env.WHATSAPP_MESSAGE,
    }
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/landing-page-fogoburguer/' : '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Fogo Burguer — Hamburgueria Artesanal',
      meta: [
        { name: 'description', content: 'Fogo Burguer — Burgers artesanais feitos com fogo de verdade. Peça pelo WhatsApp ou iFood.' },
        { property: 'og:title', content: 'Fogo Burguer — Hamburgueria Artesanal' },
        { property: 'og:description', content: 'Burgers artesanais feitos com fogo de verdade.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap'
        }
      ]
    }
  }
})
