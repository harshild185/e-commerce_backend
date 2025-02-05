export default () => ({
  app: {
    name: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    port: process.env.APP_PORT,
  },
  postgres: {
    type: process.env.DB_TYPE as any,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});
