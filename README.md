# Arabic PDF Question-Answering Chatbot (BookBuddy AI)

**Overview:** BookBuddy AI is an intelligent assistant designed to help Arabic-speaking users ask questions about Arabic content in PDF files. It's ideal for students, researchers, and casual readers who want to extract knowledge from books, reports, or historical documents—without having to read the entire text.

**Key Features:**
- *PDF Upload:* Users can upload any Arabic PDF—books, articles, or documents.
- *Smart Q&A:* The chatbot allows users to type in a question and get accurate, concise answers based on the content of the uploaded PDF.
- *Context-Aware:* Users can optionally specify the last page they’ve read to avoid spoilers or limit the scope of the answer.
- *RAG-based Architecture:*
  * Uses Sentence Transformers to retrieve relevant text chunks from the PDF.
  * Powered by LLaMA 3.2B (Unsloth) for generating high-quality, Arabic natural language answers.

- *Arabic-Focused:* All prompts, processing, and answers are tailored for Modern Standard Arabic.
- *Spoiler Protection:* If a user asks a question beyond what they’ve read, the chatbot refuses to answer and politely warns the user.
- *Modern UI/UX:* The React frontend is styled with soft AI-themed colors for readability and user comfort.

**Architecture Summary:**
- *Frontend:* React.js (with user-friendly forms for file upload, question input, and page selection)
- *Backend:* Flask API serving:
  * PDF chunking
  * Embedding with SentenceTransformers
  * Retrieval using FAISS
  * Response generation with a locally hosted LLaMA 3.2B
- *Deployment:* Designed for easy use on Google Colab with automatic Cloudflare Tunnel integration, providing public HTTPS access to the backend without any server deployment or Docker setup.
