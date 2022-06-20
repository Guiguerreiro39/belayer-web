const mongoUser = `${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@`

export const config = () => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT) || 3000,
  DATABASE: {
    URI: `mongodb://${process.env.NODE_ENV === 'production' ? mongoUser : ""}mongo:${process.env.MONGODB_PORT}/${process.env.APP_NAME}`,
  },
  JWT: {
    SECRET: process.env.JWT_SECRET,
    TIMEOUT: process.env.JWT_TIMEOUT,
  },
});
