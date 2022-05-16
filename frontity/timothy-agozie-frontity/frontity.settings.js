const settings = {
  "name": "timothy-agozie-frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "tim-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://timothy-agozie.local/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
