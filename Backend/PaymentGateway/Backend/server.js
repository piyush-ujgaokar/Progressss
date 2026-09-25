import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";
import { env } from "./src/config/env.js";

/** Connects to MongoDB, then starts the HTTP server. */
async function start() {
    await connectDB();
    app.listen(env.port, () => {
        console.log(`Server listening on port ${env.port}`);
    });
}

start().catch((err) => {
    console.error("Failed to start server", err);
    process.exit(1);
});