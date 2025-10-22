import express from "express";
import cors from "cors";
// ২টা নতুন import যোগ করুন:
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ডেটাবেস সংযোগ ফাংশন
const dbConnect = async () => {
    try {
        // DATABASE_URL টি Render এর Environment Variables থেকে আসবে
        await mongoose.connect(process.env.DATABASE_URL); 
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}

dbConnect(); // সার্ভার শুরুর আগে সংযোগ শুরু করুন


app.get("/", (req, res) => {
  res.send("✅ Server is running fine on Render!");
});

// পোর্ট 3000 এর পরিবর্তে হোস্টিং পোর্ট ব্যবহার করুন:
const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))