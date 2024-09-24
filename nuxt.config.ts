export default {
  target: "static",
  router: {
    base: "/static_page/",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt-alt/auth",
    "@nuxt-alt/http",
    "@pinia/nuxt",
  ],
  http: {
    baseURL: "http://localhost:5000",
    credentials: "omit",
    headers: {
      common: {
        Accept: "application/json",
      },
    },
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer",
        },
        endpoints: {
          login: { url: "http://localhost:5000/api/login", method: "post" },
          logout: { url: "/logout", method: "post" },
          user: { url: "http://localhost:5000/api/user", method: "get" },
        },
        user: {
          property: "user",
          autoFetch: true,
        },
      },
    },
  },
};
