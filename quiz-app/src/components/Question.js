import React, { useState, useEffect, useRef } from 'react';
import quizData from '../data/quiz.json'

const Question = ({answer, onAnswerUpdate, indexOfQuestion, activeQuestion, onSetActiveQuestion, onSetStep}) => {
    const [selected, setSelected] = useState("");
    const [data, setData] = useState(quizData.data[activeQuestion])
    const radioWrapper = useRef('');


    useEffect(() => {
        setData(quizData.data[activeQuestion]);
        if (answer !== undefined) {
            setSelected(answer.a);
            console.log("run once");
        }
    }, [data, activeQuestion, answer]);
// ==============
// Chose answer handler:
    const handleChange = (e) => {
        setSelected(e.target.value);
    };
// Previous Button:
    const handlePrevious = () => {
    //    if (activeQuestion > indexOfQuestion - 5) {
    //     onSetActiveQuestion(activeQuestion - 1)
    //    } else {
    //     onSetStep(2)
    //    }
        onSetActiveQuestion(activeQuestion - 1);
    }
    // Next Button:
    const handleNext = () => {
        onAnswerUpdate(prevState => [...prevState, {q: data.question, a:selected}]);
        setSelected("");
        if (activeQuestion + 1 <= indexOfQuestion) {
            onSetActiveQuestion(activeQuestion + 1)
        };

        const findCheckedInput =
            radioWrapper.current.querySelector("input:checked");
        if (findCheckedInput) {
            findCheckedInput.checked = false;
        }
    };

    // Submit button:
    const handleSubmit = (e) => {
        alert('Do you want to submit?');
        onAnswerUpdate(prevState => [...prevState, {q: data.question, a:selected}]);
        onSetStep(3);
    }

  return (
      <div className='container'>
          <div className='justify-content-center align-items-center mb-4'>
              <div className='row bg-light py-5 px-3 mb-5 rounded-4 gx-4 justify-content-center'>
                  <h1 className='fw-bold fs-3 text-back'>{data.question}</h1>
              </div>
              <div className='justify-content-center align-items-center'>
                  <div className='card w-75 mx-auto' ref={radioWrapper}>
                      {data.choices.map((choice, index) => (
                        <div className='card-body mb-3 border border-secondary bg-light rounded-4 fs-5' key={index}>
                        <input
                            type="radio"
                            name="answer"
                            value={choice}
                            onChange={handleChange}
                        /> {choice}
                    </div>
                      ))}        
                  </div>
                  <div className='d-flex justify-content-center'>
                    {activeQuestion <= 0 ? null : (
                        <button className='btn btn-secondary' onClick={handlePrevious}>Previous</button>
                    )}
                    {activeQuestion + 1 >= indexOfQuestion ? (
                        <button className='btn btn-warning' onClick={handleSubmit}>Submit</button>
                    ) : (
                        <button className='btn btn-info' onClick={handleNext}>Next</button>
                    )}            
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Question
