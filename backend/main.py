from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model import LLM
from pydantic import BaseModel

app = FastAPI()
llm = LLM()

class QueryModel(BaseModel):
    query: str

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"response": "Backend connected"}

@app.post("/chat")
def get_response(request: QueryModel):
    return {"response": llm.respond(user_prompt=request.query)}