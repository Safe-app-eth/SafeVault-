{
  "version": 2,
  "builds": [
    {
      "src": "next.config.js",
      "use": "@vercel/next"
    }
  ],
  "github": {
    "enabled": true,
    "silent": false,
    "deployments": {
      "autoAlias": true,
      "productionBranch": "main",
      "skip": {
        "files": [
          "!**/*.{js,ts,tsx,json,css,scss,md,html,env}",
          "!next.config.js",
          "!package.json",
          "!pnpm-lock.yaml",
          "!yarn.lock",
          "!vercel.json"
        ]
      }
    }
  }
}
