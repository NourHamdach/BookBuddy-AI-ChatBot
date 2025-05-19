import React, { useState } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import UploadBox from './components/UploadBox/UploadBox';
import StepsSection from './components/StepsSection/StepsSection';
import QuestionSection from './components/QuestionSection/QuestionSection';
import OutputSection from './components/OutputSection/OutputSection';
import './App.css';

export default function App() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [question, setQuestion] = useState('');
  const [lastPage, setLastPage] = useState('');
  const [output, setOutput] = useState('');
  const [audioUrl, setAudioUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!uploadedFile || !question) {
      setOutput('⚠️ الرجاء رفع ملف PDF وكتابة سؤال.');
      return;
    }

    const formData = new FormData();
    formData.append('pdf', uploadedFile);
    formData.append('question', question);
    if (lastPage) formData.append('last_page', lastPage);

    setIsLoading(true);
    setOutput('⏳ جاري توليد الإجابة...');
    setAudioUrl(null); // Reset any previous audio

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 120000);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/`, {
        method: 'POST',
        body: formData,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();
      console.log("📡 Response from backend:", data);

      if (data.answer) {
        setOutput(data.answer);
        if (data.audioUrl) {
          setAudioUrl(`${process.env.REACT_APP_API_URL}${data.audioUrl}`);
        }
      } else if (data.error) {
        setOutput(`❌ خطأ: ${data.error}`);
      } else {
        setOutput('⚠️ لا توجد إجابة متاحة.');
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        setOutput('❌ انتهت المهلة دون استجابة من الخادم (٢ دقيقة).');
      } else {
        console.error('❌ Request error:', err);
        setOutput('❌ حدث خطأ أثناء الاتصال بالخادم.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">BookBuddy AI</h1>

      <HeroSection />
      <StepsSection />
      <UploadBox onFileSelect={setUploadedFile} />

      {uploadedFile && (
        <div className="file-preview">
          <p>📄 الملف المرفوع: <strong>{uploadedFile.name}</strong></p>
        </div>
      )}

      <QuestionSection
        question={question}
        setQuestion={setQuestion}
        lastPage={lastPage}
        setLastPage={setLastPage}
      />

      <OutputSection
        output={output}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        audioUrl={audioUrl}
      />
    </div>
  );
}
