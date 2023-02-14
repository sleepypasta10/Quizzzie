import React, { useState } from "react";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Question from "./components/Question";
import quizData from "./data/quiz.json"
import EndGame from "./components/EndGame";
import Modal from "./components/Modal";


function App() {

  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
// Start Button:
  const quizStartHandler = () => {
    setStep(2);
  };
// Try Again button:

  const resetClickHandler = () => {
    setShowModal(false);
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
  }

  return (
    <div className="App">
    {step === 1 && <Home onQuizStart={quizStartHandler} />}
    {step === 2 && <Question 
    answer={answers[activeQuestion]}
    onAnswerUpdate={setAnswers}
    indexOfQuestion={quizData.data.length}
    activeQuestion={activeQuestion}
    onSetActiveQuestion={setActiveQuestion}
    onSetStep={setStep}
    />}
    {step === 3 && <EndGame 
    results={answers}
    data={quizData.data}
    onReset={resetClickHandler}
    onAnswerCheck={() => setShowModal(true)}
    />}
    {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={quizData.data}
      />}
    </div>
  );
}

export default App;
