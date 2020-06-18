import React from 'react';
import useFlowController from '../hooks/useFlowController';

const ComponentOne = () => {
  const gotoNext = useFlowController();
  return (
    <>
      <div>ComponentOne</div>
      <div>
        <button
          type="button"
          onClick={() => {
            gotoNext('ComponentOne');
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ComponentOne;
