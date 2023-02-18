import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from './routes/dalleRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);
app.use('/api/v1/user', authRoutes);

app.get("/", async (req, res) => {
    res.status(200).json({
        message: 'Hello from DALL.E!',
      });
});

const PORT = process.env.PORT;
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () =>
      console.log(`Server listening on ${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
