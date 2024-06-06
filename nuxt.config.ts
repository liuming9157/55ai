// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  routeRules: {
    '/account/**': { ssr: false }

  },
  devtools: { enabled: false },
  components: {
    global: true,
    dirs: ["~/components"],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
    "@nuxtjs/supabase"
  ],

  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: undefined,
      exclude: ['/'],
      cookieRedirect: false,
    }
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },
  },
  app: {
    head: {
      titleTemplate: '%s-55AI',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'AI Tools,AI collection,AI Nanvigation',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
      {
        name: 'baidu-site-verification',
        content: 'codeva-GiEpxZRmes',
      },
      ],
      link: [{
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: 'https://www.superox.cn/assets/img/favicon.ico',
      }, {
        rel: 'stylesheet',
        href: 'https://www.superox.cn/assets/libs/font-awesome/css/font-awesome.min.css',
      }
      ],
    },
  },
});