const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Update this with your API endpoint
    createProxyMiddleware({
      target: 'http://localhost:3000', // Update this with your API server address
      changeOrigin: true,
    })
  );
};
