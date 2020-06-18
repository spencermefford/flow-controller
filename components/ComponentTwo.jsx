import React from 'react';
import useFlowController from '../hooks/useFlowController';

const ComponentTwo = () => {
  const onNext = useFlowController();
  return (
    <>
      <div>ComponentTwo</div>
      <div>
        <button
          type="button"
          onClick={() => {
            onNext('ComponentTwo');
          }}
        >
          Next
        </button>

      </div>
    </>
  );
};

export default ComponentTwo;
