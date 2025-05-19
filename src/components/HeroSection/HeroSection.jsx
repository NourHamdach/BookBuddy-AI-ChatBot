import React from 'react';
import './HeroSection.css';
import booksImage from './books.png';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Spending too much time on lengthy Arabic PDF files?</h1>
        <p>
          No more struggling with Arabic PDFs, our AI lets you ask questions and get instant answers from your documents in seconds!
        </p>
      </div>
      <div className="hero-image">
        <img src={booksImage} alt="Books illustration" />
      </div>
    </section>
  );
}
