export const config = () => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT) || 3000,
  FRONTEND_URL: process.env.FRONTEND_URL,
  JWT: {
    SECRET: process.env.JWT_SECRET,
    TIMEOUT: process.env.JWT_TIMEOUT,
  },
});
