// filepath: c:\Nikhil\Hackathon\Perplexity\TrueRX\server\routes\index.js
import express from "express";
import userRoutes from "./userRoutes.js"; // Add this import

const router = express.Router();

// Mount routes instead of defining them here
router.use("/users", userRoutes);

export default router;