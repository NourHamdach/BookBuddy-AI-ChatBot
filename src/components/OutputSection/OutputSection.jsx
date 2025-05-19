import React, { useRef } from 'react';
import './OutputSection.css';

export default function OutputSection({ output, handleSubmit, isLoading, audioUrl }) {
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      audio.play();
    }
  };

  return (
    <div className="output-section">
      

      <div className="output-buttons">
        <button className="generate-btn" onClick={() => {
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
          handleSubmit();
        }} disabled={isLoading}>
          {isLoading ? '⏳ جاري الإرسال...' : 'إرسال السؤال'}
        </button>

        {audioUrl && (
          <button className="tts-btn" onClick={handlePlayAudio}>
            🔊 استمع
          </button>
        )}
      </div>
      {output && <div className="output-box">{output}</div>}
    </div>
  );
}
