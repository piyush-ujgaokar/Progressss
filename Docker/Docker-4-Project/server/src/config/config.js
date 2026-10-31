import dotenv from "dotenv"
import path from "node:path";
import { fileURLToPath } from "node:url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
path: path.resolve(__dirname, "../../../.env"),
});


function required(key) {
    const value = process.env[key]
    if (!value) {
        throw new Error(`Missing required environment variable: ${key}`)
    }
    return value
}

export default Object.freeze({
    MONGO_URI: required("MONGO_URI"),
    REDIS_URL: required("REDIS_URL"),
    URL_STRESS_TEST_MODE: required("URL_STRESS_TEST_MODE")

})

