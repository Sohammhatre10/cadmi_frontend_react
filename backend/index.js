require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post("/infer", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama-3.3-70b-versatile",
    });

    res.json({ result: completion.choices[0].message.content });
  } catch (error) {
    console.error("Error fetching response from Groq API:", error);
    res.status(500).json({ error: "Failed to fetch response from Groq API" });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running! Use POST /infer to get responses.");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
