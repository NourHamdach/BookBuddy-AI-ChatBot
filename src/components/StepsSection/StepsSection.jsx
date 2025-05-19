import React from 'react';
import './StepsSection.css';

export default function StepsSection() {
    const steps = [
        {
          title: '1. Enter Your Arabic PDF',
          text: 'Simply drag and drop your Arabic PDF file into our AI-powered tool. The upload process is quick and easy, setting you up in seconds.'
        },
        {
          title: '2. Ask Your Question',
          text: 'Type in any question related to the content of your PDF. Whether it’s about a specific topic or general understanding, our AI is ready to help.'
        },
        {
          title: '3. Optionally Specify the Last Page You Read',
          text: 'Let the AI know the last page you’ve read so it can focus its response based on that section. This helps you continue seamlessly without re-reading.'
        },
        {
          title: '4. Get Your Answer',
          text: 'Receive a clear and accurate answer instantly. Our AI provides smart, reliable responses to satisfy your curiosity and help you learn faster.'
        }
      ];
      

  return (
    <div className="steps-container">
      <h2>How to Use AI PDF Q&A</h2>
      <p>Easily using AI PDF Q&A in three simple steps:</p>
      <div className="steps-grid">
        {steps.map((step, i) => (
          <div className="step-card" key={i}>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}