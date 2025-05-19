# BookBuddy AI — Arabic PDF Question Answering Assistant
BookBuddy AI is an AI-powered assistant designed to support Arabic-speaking users in querying the content of Arabic PDF documents. It is particularly useful for students, researchers, and readers seeking to extract relevant information without reading entire texts.

**Key Features**
**Arabic PDF Support: **Upload books, articles, or historical documents in Arabic.

**Natural Language Q&A:** Ask questions and receive precise, context-aware answers in Modern Standard Arabic.

**Reading Progress Tracking: **Limit answers to content read so far, avoiding spoilers.

**RAG-Based Pipeline:**

**Retrieval: **SentenceTransformers + FAISS for semantic search.

**Generation:** LLaMA 3.2B (Unsloth) for high-quality Arabic response generation.

**Arabic Optimization:** All processing is fine-tuned for Arabic language structure and semantics.

**Modern UI: **React-based interface with an intuitive and accessible design.

**System Overview**
**Frontend:** React.js for file upload, question input, and page tracking.

**Backend:** Flask API for chunking, embedding, retrieval, and answer generation.

**Deployment: **Ready-to-use on Google Colab with automatic Cloudflare Tunnel integration—no additional setup required.

BookBuddy AI advances Arabic NLP accessibility by enabling interactive, efficient exploration of Arabic texts using cutting-edge local LLMs.

