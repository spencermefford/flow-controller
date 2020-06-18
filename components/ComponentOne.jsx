import React from 'react';
import useFlowController from '../hooks/useFlowController';

const ComponentOne = () => {
  const gotoNext = useFlowController();
  return (
    <>
      <div>ComponentOne</div>
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

export default ComponentOne;
