import React from 'react';
import useFlowController from '../hooks/useFlowController';

const InnerTwo = () => {
  const gotoNext = useFlowController();
  return (
    <>
      <div>InnerTwo</div>
      <div>
        <button
          type="button"
          onClick={() => {
            gotoNext('InnerTwo');
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default InnerTwo;
