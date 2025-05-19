# BookBuddy AI — Arabic PDF Question Answering Assistant
BookBuddy AI is an intelligent assistant designed to help Arabic-speaking users interact with Arabic content in PDF files. It is ideal for students, researchers, and casual readers who want to extract knowledge from books, reports, or historical documents—without reading the entire text.

**Key Features**
**PDF Upload:** Supports Arabic-language books, articles, and documents in PDF format.

**Smart Q&A:** Users can ask natural-language questions and receive accurate, context-aware answers based on the document's content.

**Context Awareness:** Users may specify the last page read to restrict answers to known content and avoid spoilers.

**Arabic-Focused Design:** All prompts, processing, and answers are optimized for Modern Standard Arabic.

**Spoiler Protection:** The assistant politely refuses to answer questions that go beyond the user's selected page.

**Architecture**
**Retrieval-Augmented Generation (RAG):**

**Retrieval:** Relevant text chunks are retrieved using SentenceTransformers and FAISS.

**Generation:** Responses are generated using a locally hosted LLaMA 3.2B (via Unsloth), optimized for Arabic.

**System Overview**
**Frontend:**
Built with React.js, featuring user-friendly components for file upload, question input, and page selection.

**Backend:**
**Flask API providing:**

PDF chunking and preprocessing

Embedding with SentenceTransformers

Semantic retrieval with FAISS

Arabic answer generation via LLaMA 3.2B

**Deployment:**
Designed for Google Colab with automatic Cloudflare Tunnel integration, enabling public HTTPS access without server configuration or Docker setup.

BookBuddy AI contributes to the advancement of Arabic-language NLP tools, offering a more interactive and accessible way to explore Arabic content through AI-powered question answering.
