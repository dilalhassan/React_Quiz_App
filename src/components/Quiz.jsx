import React, { useState } from "react";
import QuestionList from "./QuestionList";
import "./Quiz.css";

const Quiz = () => {
  const question = [
    {
      question: "What is React ?",
      options: [
        "CSS Framwork",
        "React Library",
        "React Framwork",
        "Testing to",
      ],
      answer: "React Library",
    },
    {
      question: "What is 2 + 2",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },

    {
      question: "Which type of shirt is often worn with a suit?",
      options: ["T-shirt", "Polo shirt", "Dress shirt", "Flannel shirt"],
      answer: "Dress shirt",
    },
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is the capital of India?",
      options: ["Mumbi", "Delhi", "pune", "Assam"],
      answer: "Delhi",
    },
  ];

  const [currentQuestionIndex, setCurrrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === question[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  };

  return (
    <div>
      {currentQuestionIndex < question.length ? (
        <div>
          <QuestionList
            question={question[currentQuestionIndex].question}
            options={question[currentQuestionIndex].options}
            handleClick={handleClick}
            currentAnswer={currentAnswer}
          />
          <button
            disabled={currentAnswer === null}
            className={currentAnswer === null ? "button-disable" : "button"}
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </div>
      ) : (
        <div>your Score is {score}</div>
      )}
    </div>
  );
};

export default Quiz;
