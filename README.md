
# You-RAG 🎥💬
### Chat with YouTube Videos Using Retrieval-Augmented Generation

You-RAG is a Flask-based web application that allows users to ask questions about YouTube videos and receive transcript-based answers with timestamped links to relevant moments in the video.

## 📸 Screenshots

![You-RAG Screenshot 1](screenshots/Screenshot%202026-10-13%20230949.png)

![You-RAG Screenshot 2](Screenshot 2026-10-13 233526.png)

![You-RAG Screenshot 3](Screenshot 2026-10-13 233423.png)

## ✨ Features

- Ask questions about YouTube videos.
- Retrieve relevant information from video transcripts.
- Get timestamped links to relevant moments.
- Use semantic search to find relevant transcript chunks.
- Generate answers using a language model.

## 🛠️ Tech Stack

- **Backend:** Python, Flask
- **RAG Framework:** LangChain
- **Vector Database:** ChromaDB
- **Embeddings:** FastEmbed
- **Language Model:** Groq
- **Frontend:** HTML, CSS, JavaScript

## ⚙️ Prerequisites

- Python 3.10 or compatible version
- Git
- Groq API key

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/advin2321/you-rag.git
cd you-rag
```

### 2. Create a Virtual Environment

**Windows:**

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

**macOS/Linux:**

```bash
python -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables

Create a `.env` file in the project root and add the environment variables required by your application.

```env
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=your_groq_model
```

Never upload real API keys or secrets to GitHub.

### 5. Run the Application

Run the Flask entry-point file configured in your project. For example:

```bash
python app.py
```

Open the local URL shown in the terminal. If the application runs on port `8080`, visit:

http://localhost:8080

## 🔄 How It Works

1. The application retrieves a YouTube video's transcript.
2. The transcript is split into smaller text chunks.
3. FastEmbed generates embeddings for the chunks.
4. ChromaDB stores the embeddings for semantic retrieval.
5. Relevant transcript chunks are retrieved for a user's question.
6. The language model generates an answer based on the retrieved context.
7. The response includes timestamped links to relevant video moments.

## 🔐 Security

Keep credentials in your local `.env` file and ensure `.env` is included in `.gitignore`.

## 👨‍💻 Author

**Sarthak Kumar**

[GitHub Profile](https://github.com/advin2321)

---

Built with Python, LangChain, ChromaDB, and Groq.
