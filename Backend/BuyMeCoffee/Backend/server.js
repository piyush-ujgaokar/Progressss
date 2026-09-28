import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";
import { env } from "./src/config/config.js";

try {
    await connectDB();
    app.listen(env.PORT, () => {
        console.log(`Server running on port ${env.PORT} (${env.NODE_ENV})`);
    });
} catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
}