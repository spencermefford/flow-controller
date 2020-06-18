import React from 'react';
import useFlowController from '../hooks/useFlowController';

const ComponentThree = () => {
  const onNext = useFlowController();
  return (
    <>
      <div>ComponentThree</div>
      <div>
        <button
          type="button"
          onClick={() => {
            onNext('ComponentThree');
          }}
        >
          Next
        </button>

      </div>
    </>
  );
};

export default ComponentThree;
