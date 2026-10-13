
# You-RAG 🎥💬
### Chat with YouTube Videos Using Retrieval-Augmented Generation

You-RAG is a Flask-based web application that allows users to ask questions about YouTube videos and receive answers based on their transcripts, along with timestamped links to the relevant moments in the video.

## 📸 Screenshots

### 1. Application Interface
![Application Interface](screenshots/Screenshot%202026-10-13%20230949.png)

### 2. Video Processing and Chat
![Video Processing and Chat](screenshots/Screenshot%202026-10-13%20231250.png)

### 3. Question Answering
![Question Answering](screenshots/Screenshot%202026-10-13%20231353.png)

## ✨ Features

- **YouTube Video Q&A:** Ask questions about a video's content.
- **Transcript-Based Answers:** Uses video transcripts to find relevant information.
- **Timestamped Links:** Get links to relevant moments in the video.
- **Semantic Search:** Retrieves relevant transcript chunks based on your question.
- **Conversational Interface:** Interact with video content through a simple web interface.

## 🛠️ Tech Stack

- **Python** — Application logic
- **Flask** — Web framework
- **LangChain** — RAG pipeline and language model integration
- **ChromaDB** — Vector database for storing and retrieving transcript embeddings
- **FastEmbed** — Text embeddings
- **Groq** — Language model inference
- **HTML, CSS, JavaScript** — Frontend

## ⚙️ Prerequisites

Before running the project, make sure you have:

- Python 3.10 or a compatible version
- Git
- A Groq API key

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

Create a `.env` file in the project root and add the environment variables required by the application.

For example:

```env
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=your_groq_model
```

Add any other environment variables required by your local configuration. Never commit your actual API keys or secrets to GitHub.

### 5. Run the Application

Start the Flask application using the command configured in your project. For example, if the entry-point file is `app.py`:

```bash
python app.py
```

Open the local URL shown in the terminal. If the application runs on port `8080`, visit:

http://localhost:8080

## 🔄 How It Works

1. The application obtains the transcript of a YouTube video.
2. The transcript is divided into smaller text chunks.
3. FastEmbed generates embeddings for the chunks.
4. ChromaDB stores the embeddings for semantic retrieval.
5. When a user asks a question, relevant transcript chunks are retrieved.
6. The language model generates an answer using the retrieved context.
7. The response includes timestamped links to relevant parts of the video.

## 🔐 Environment Variables

Keep your API keys and other secrets in a local `.env` file. Ensure `.env` is listed in `.gitignore` so sensitive credentials are not pushed to the repository.

## 👨‍💻 Author

**Sarthak Kumar**

GitHub: [advin2321](https://github.com/advin2321)

---

Built with Python, LangChain, ChromaDB, and Groq.
