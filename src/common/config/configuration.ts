export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  proxyIP: process.env.PROXY_IP,
});
