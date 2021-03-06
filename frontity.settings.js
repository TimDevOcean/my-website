const settings = {
  "name": "timothy-agozie-frontity",
  "state": {
    "frontity": {
      "url": "https://timothyagozie.com",
      "title": "Timothy Agozie",
      "description": ""
    }
  },
  "packages": [
    {
      "name": "tim-theme"
    },
    {
      name: "@frontity/google-tag-manager-analytics",
      state: {
        googleTagManagerAnalytics: {
          containerId: "GTM-MJNTDG5",
        },
      },
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://tim.devoceangh.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
