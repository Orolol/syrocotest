import React, { useState } from 'react';
import './App.css';
import ComputationOptions from './Components/ComputationOptions/ComputationOptions';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleCompute = () => {
    setTimeout(() => setShowModal(true), 500);
  };

  return (
    <div className='App'>
      <ComputationOptions handleCompute={handleCompute} />
      {showModal && (
        <div className='modal-bg'>
          <div className='modal'>
            <span>Computation complete</span>
            <button onClick={() => setShowModal(false)}>&#9587;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
