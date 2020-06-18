import React from 'react';
import useFlowController from '../hooks/useFlowController';

const ComponentOne = () => {
  const onNext = useFlowController();
  return (
    <>
      <div>ComponentOne</div>
      <div>
        <button
          type="button"
          onClick={() => {
            onNext('ComponentOne');
          }}
        >
          Next
        </button>

      </div>
    </>
  );
};

export default ComponentOne;
