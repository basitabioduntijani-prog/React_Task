import React, { useState } from "react";
import Question from "./Question";
import ScoreBoard from "./ScoreBoard";
import AnswerFeedback from "./AnswerFeedback";
import "./App.css";

export default function QuizApp() {
  const questions = [
    {
      question: "What is the capital of Lagos State?",
      options: ["Lagos Island", "Ikeja", "Victoria Island", "Lekki"],
      correct: "Ikeja",
    },
    {
      question: "What is the capital of Kwara State?",
      options: ["Ogbomosho", "Offa", "Ilorin", "Omu-Aran"],
      correct: "Ilorin",
    },
    {
      question: "What is the capital of Kano State?",
      options: ["Kano", "Wudil", "Dambatta", "Bichi"],
      correct: "Kano",
    },
    {
      question: "What is the capital of Rivers State?",
      options: ["Port Harcourt", "Bonny", "Ahoada", "Degema"],
      correct: "Port Harcourt",
    },
    {
      question: "What is the capital of Oyo State?",
      options: ["Ogbomosho", "Ibadan", "Oyo", "Iseyin"],
      correct: "Ibadan",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [finished, setFinished] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
  };

  const handleSubmit = () => {
    if (!selected) return;

    const isCorrect = selected === questions[current].correct;
    setFeedback(isCorrect ? "✅ Correct!" : `❌ Wrong! Correct answer: ${questions[current].correct}`);

    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to next question after 1.5s
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected("");
        setFeedback(null);
      } else {
        setFinished(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setFeedback(null);
    setFinished(false);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-box">
        <h1 className="title"> 🏳️ Nigerian States Quiz</h1>

        {!finished ? (
          <>
            <ScoreBoard score={score} total={questions.length} />

            <Question
              question={questions[current].question}
              options={questions[current].options}
              selected={selected}
              onSelect={handleSelect}
              current={current + 1}
              total={questions.length}
            />

            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={!selected || feedback}
            >
              Submit Answer
            </button>

            {feedback && <AnswerFeedback message={feedback} />}
          </>
        ) : (
          <div className="final-score">
            <h2>🎉 Quiz Finished!</h2>
            <p>
              Your Score: <strong>{score}</strong> / {questions.length}
            </p>
            <button className="restart-btn" onClick={restartQuiz}>
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
