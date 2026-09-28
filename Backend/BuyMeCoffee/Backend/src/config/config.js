import "dotenv/config";

const REQUIRED = [ "MONGO_URI", "ACCESS_TOKEN", "REFRESH_TOKEN" ];

const missing = REQUIRED.filter((key) => !process.env[ key ]);
if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
}

const port = Number(process.env.PORT ?? 8000);
if (!Number.isInteger(port) || port <= 0) {
    throw new Error("PORT must be a positive integer");
}

export const env = Object.freeze({
    NODE_ENV: process.env.NODE_ENV ?? "development",
    PORT: port,
    MONGO_URI: process.env.MONGO_URI,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN,
    isProduction: process.env.NODE_ENV === "production",
});