// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@nuxt/image-edge',
        ['@nuxtjs/robots', { UserAgent: '*', Disallow: '' }],
        'nuxt-simple-sitemap',
    ],
    tailwindcss: {
      cssPath: '~/assets/css/main.css',
    },
    image: {
      provider: 'netlify',
      netlify: {
        baseURl: process.env.IMAGES_URL
      }
    },
    app: {
      head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        htmlAttrs: {
          lang: 'en'
        }
      }
    },
    content: {
        // https://content.nuxtjs.org/api/configuration
        markdown: {
            toc: { depth: 3, searchDepth: 3 }
        },
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: 'github-dark',
          }
        }
      },
    runtimeConfig: {
      public: {
        siteUrl: 'https://javiersr.dev/',
      }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    }
})
