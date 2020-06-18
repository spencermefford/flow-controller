import React from 'react';
import useFlowController from '../hooks/useFlowController';

const ComponentTwo = () => {
  const gotoNext = useFlowController();
  return (
    <>
      <div>ComponentTwo</div>
      <br />
      <div>
        <button
          type="button"
          onClick={() => {
            gotoNext();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ComponentTwo;
