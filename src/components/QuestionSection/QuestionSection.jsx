import './QuestionSection.css';

export default function QuestionSection({ question, setQuestion, lastPage, setLastPage }) {
  return (
    <div className="question-section">
      <textarea
        className="question-input"
        placeholder="ما هو سؤالك؟"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        className="last-page-input"
        type="number"
        placeholder="آخر صفحة قرأتها (اختياري)"
        value={lastPage}
        onChange={(e) => setLastPage(e.target.value)}
      />
    </div>
  );
}
