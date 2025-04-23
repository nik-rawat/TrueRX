import express from "express";
import cors from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import routes from "./routes/userRoutes.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use("/api", routes);

// Root route
app.get("/", (req, res) => {
  res.send("TrueRX API is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;