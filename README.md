# Personal Portfolio

Site is under development! You can take a look at it [here](https://faahim.github.io). I'd love to get your feedback on it! :)

## Requirements

This project requires **Node.js 10.24.1**. The project includes an `.nvmrc` file for easy version management.

### Using nvm (Recommended)

If you have [nvm](https://github.com/nvm-sh/nvm) installed:

```bash
nvm use
npm install
```

This will automatically switch to Node.js 10.24.1 as specified in `.nvmrc`.

## Development

```bash
npm start
```

This runs the app in development mode with CSS watching enabled.

## Deployment to GitHub Pages

To deploy the site to GitHub Pages:

```bash
npm run deploy
```

This command will:
1. Build the production-ready files (`npm run build`)
2. Deploy the `build` folder to the `master` branch using `gh-pages`

The site will be available at `https://faahim.github.io/` (as configured in `package.json`).