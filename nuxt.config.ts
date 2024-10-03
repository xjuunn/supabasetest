// https://nuxt.com/docs/api/configuration/nuxt-config
// let theme = useStorage('isDark');
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@hypernym/nuxt-anime',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/supabase'
  ],
  plugins: [
    { src: '~/plugins/scrollreveal.ts', mode: 'client' },
    {src: '~/plugins/supabase.ts', mode:'all' },
  ],
  runtimeConfig: {
    public: {
      githubToken: process.env.GITHUB_TOKEN,
      HTTP_PROXY: process.env.HTTP_PROXY,
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    }
  },
  app: {
    head: {
      script: [
        {
          children: `
            (function() {
              var theme = localStorage.getItem('isDark');
              if (theme === 'false') {
                document.documentElement.setAttribute('data-theme', 'light');
              } else {
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            })()
          `
        }
      ],
    }
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  eslint: {

  }
})