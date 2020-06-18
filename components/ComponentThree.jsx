import React from 'react';
import useFlowController from '../hooks/useFlowController';

const ComponentThree = () => {
  const gotoNext = useFlowController();
  return (
    <>
      <div>ComponentThree</div>
      <div>
        <button
          type="button"
          onClick={() => {
            gotoNext('ComponentThree');
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ComponentThree;
