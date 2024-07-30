import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "takos api document",
  description: "takosのapiのドキュメントです",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "quick-start", link: "/welcome" },
        ]
      },
      {
        text: "takos web api",
        items: [
          {
            text: "users",
            link: "/client/users",
            items: [
              { text: "icon", link: "/client/users/icon" },
              { text: "userName", link: "/client/users/userName" },
              { text: "nickName", link: "/client/users/nickName" },
            ],
          },
          {
            text: "profile",
            link: "/client/profile",
            items: [
              { text: "icon", link: "/client/profile/icon" },
              { text: "userName", link: "/client/profile/userName" },
              { text: "nickName", link: "/client/profile/nickName" },
              { text: "privacy", link: "/client/profile/privacy" },
            ],
          },
          {
            text: "othres",
            link: "/client/othres",
            items: [
              { text: "bgimage", link: "/client/othres/bgimage" },
              { text: "chart", link: "/client/othres/chart" },
              { text: "csrftoken", link: "/client/othres/csrftoken" },
              { text: " welcome", link: "/client/othres/welcome" },
            ],
          },
          {
            text: "sessions",
            link: "/client/sessions",
            items: [
              { text: "login", link: "/client/sessions/login" },
              { text: "logout", link: "/client/sessions/logout" },
              { text: "register", link: "/client/sessions/register" },
            ],
          },
          {
            text: "websocket",
            link: "/client/websocket",
            items: [
            ],
          }
        ],
      },
      {
        text: "takos api",
        items: [],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  base: "/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ]
});
