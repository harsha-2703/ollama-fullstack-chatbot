# Fullstack Chatbot using Ollama, FastAPI, React, and TailwindCSS

This is a full-stack AI chatbot project that integrates a **React + TailwindCSS** frontend with a **FastAPI** backend powered by **Ollama** (local LLMs like LLaMA3, Gemma3, etc.).

---

## Features

- Chat UI built with React and styled using TailwindCSS
- Backend API using FastAPI to handle chat requests
- Local language model integration with Ollama
- Modular and easily customizable

---

## Prerequisites
1. **Install Ollama**
   [Ollama GitHub Releases](https://github.com/ollama/ollama/releases) — version `v0.11.8`
2. **Pull a model from ollama**
   
   ```
   ollama pull gemma3
   ```
3. **Install node**
   [Download Node v22.14.0](https://nodejs.org/en/download/archive/v22.14.0)

---

## Getting Started
### 1. Clone the Repository
```
git clone https://github.com/harsha-2703/ollama-fullstack-chatbot.git
cd ollama-fullstack-chatbot
```

### 2. Frontend Setup (React + TailwindCSS)
```
cd frontend
npm install
npm run dev
```

### 3. Backend Setup (FastAPI + Ollama)
#### Option A: Using venv
```
cd backend
python -m venv venv
source venv/bin/activate       # macOS/Linux
# or
venv\Scripts\activate          # Windows

pip install -r requirements.txt
uvicorn main:app --reload
```

#### Option B: Using conda
```
conda create -n chatbot-env python=3.10.18
conda activate chatbot-env

cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## Note
* Frontend runs at: http://localhost:5173
* Backend runs at: http://localhost:8000
