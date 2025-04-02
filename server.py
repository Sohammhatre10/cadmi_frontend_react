from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = FastAPI()

# Enable CORS (For React Frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (Change this for security)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, OPTIONS, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Define input schema
class QueryInput(BaseModel):
    prompt: str

# Groq API Configuration
GROQ_API_URL = "https://api.groq.com/inference"
GROQ_API_KEY = os.getenv("GROQ_API_KEY")  # Load API Key from environment

@app.post("/infer")
def get_inference(data: QueryInput):
    if not GROQ_API_KEY:
        raise HTTPException(status_code=500, detail="Groq API Key not found")

    payload = {"input": data.prompt}
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    response = requests.post(GROQ_API_URL, json=payload, headers=headers)
    
    if response.status_code != 200:
        raise HTTPException(status_code=500, detail=f"Groq API error: {response.text}")
    
    return {"result": response.json()}  # Send JSON response
