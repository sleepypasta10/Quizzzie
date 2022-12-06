import React from 'react';
import "../components/Modal.css";

function Modal({onClose, results, data}) {
  return (
    <div className='active-modal'>
        <div className='btn-modal' onClick={onClose}></div>
        <div className='modal-content'>
          <header className='modal-header mt-1 justify-content-center'>
            <p className='fs-2 fw-bold mx-auto mt-1'>Your Answers</p>
            <button className='btn btn-dark py-1 mb-3 mx-2' onClick={onClose}>X</button>
          </header>
          <section className='modal-body'>
            <ul>
              {results.map((result, index) => (
                <li key={index} className='mb-4'>
                <p className='fs-5'><strong>{result.q}</strong></p>
                <p className={result.a === data[index].answer ? 'bg-dark text-white' : 'bg-light'}> Your answer: {result.a}</p>
                {result.a !== data[index].answer && 
                <p className='bg-light'>Correct answer: {data[index].answer} </p>}
                </li>
              ))}
            </ul>
          </section>
        </div>
    </div>
  )
}

export default Modal
