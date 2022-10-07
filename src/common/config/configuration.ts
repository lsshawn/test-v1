export default () => ({
  APP_ENV: process.env.APP_ENV,
  port: parseInt(process.env.PORT, 10) || 3000,
  PROXY_IP: process.env.PROXY_IP,
});
