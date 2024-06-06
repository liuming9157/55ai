// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  routeRules: {
    '/account/**': { ssr: false },
    '/toefl/report': { ssr: false },
    '/sat/report': { ssr: false },
    '/ielts/report': { ssr: false },

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
        lang: 'zh-CN',
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
        content: '超牛模考,留学,语培,SAT,ACT,托福TOEFL,雅思IELTS,GRE,GMAT,SAT,ACT,小托福TOEFL junior,PET,最全真题,题库丰富',
      },
      {
        hid: 'description',
        name: 'description',
        content: '超牛模考是专注于出国留学备考服务的模考测试平台。超牛模考旨在采用最新人工智能AI技术,为百万留学生提供方便好用的模考测试服务，真实满足学生托福TOEFL、雅思IELTS、GRE、GMAT、SAT、ACT、小托福TOEFL junior、PET等英语考试的学习测试需求。目前，超牛模考已为超百万留学生服务，并为超百家语培机构提供技术支持和营销系统服务。',
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