import dotenv from "dotenv";

dotenv.config();

const requiredEnvVars = ["FRONTEND_URL", "JWT_SECRET", "MONGODB_URI", "PORT"] as const;
type RequiredEnv = typeof requiredEnvVars[number];

const env = {
    FRONTEND_URL: process.env.FRONTEND_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT || "3000",
    NODE_ENV: process.env.NODE_ENV || "development",
} as {
    [K in RequiredEnv]: string;
} & {
    PORT: string;
    NODE_ENV: string;
};

// validate required vars at startup
for (const key of requiredEnvVars) {
    if (!process.env[key]) {
        throw new Error(`Missing required env var: ${key}`);
    }
}

export default env;
