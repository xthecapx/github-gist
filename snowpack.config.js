/** @type {import("snowpack").SnowpackUserConfig } */

const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({
  target: 'https://api.github.com',
  changeOrigin: true,
});

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
    {
      src: '/api/.*',
      dest: (req, res) => {
        req.url = req.url.replace(/^\/api/, '');

        proxy.web(req, res);
      },
    },
  ],
  optimize: {
    bundle: process.env.NODE_ENV == 'production',
    minify: process.env.NODE_ENV == 'production',
    target: 'es2020',
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    sourceMaps: false,
    clean: true,
    baseUrl: process.env.NODE_ENV == 'production' ? '/github-gist' : '/',
  },
};
