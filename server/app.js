import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const openai = new OpenAI({ apiKey: process.env.APP_OPENAI_KEY });

app.post("/api/generate", async (req, res) => {
  const prompt = req.body.message;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });
    console.log(completion);
    console.log(completion.choices[0].message.content);
    res.json({ message: completion.choices[0].message.content });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
