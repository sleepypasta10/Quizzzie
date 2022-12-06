import React, {useEffect, useState} from 'react'

function EndGame({results, data, onReset, onAnswerCheck}) {

    const [correctAnswer, setCorrectAnswer] = useState(0);
    useEffect(() => {
        let correct = 0;
        results.forEach((result,index) => {
            if(result.a === data[index].answer) {
                correct++;
            }
        });
        setCorrectAnswer(correct)
    }, [])

    return (
        <div className='container mx-auto w-50 h-100'>
            <div className='card bg-light text-center'>
                <h4 class="card-header py-4 fs-3 fw-bold">Your Result</h4>
                <div class="card-body">
                    <p class="card-text fs-5"><strong>{correctAnswer} of {data.length}</strong></p>
                    <p class="card-text fs-5"><strong> {Math.floor((correctAnswer / data.length) * 100)}%</strong></p>
                    <button className='btn btn-success mt-2' onClick={onAnswerCheck}>Check your result</button>
                    <button className='btn btn-primary mt-2' onClick={onReset}>Try Again</button>
                </div>
            </div>
        </div>
    )
}

export default EndGame
