import React from 'react';
function Home ({ onQuizStart }){

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='container px-4 text-center'>
      <h1 className='fw-bold fs-1 mx-auto mt-3 py-4 text-capitalize text-white'>Welcome to the game</h1>
      <p className='text-white fs-3'>Let begin!</p>
      <button className='btn-custom'
        onClick={onQuizStart}
      >
        Start
      </button>
      </div>
    </div>
  )
}

export default Home
