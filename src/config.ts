export const config = () => ({
    NODE_ENV: process.env.NODE_ENV,
    PORT: parseInt(process.env.PORT) || 3000,
    DATABASE: {
        URI: process.env.MONGODB_URI
    }
})