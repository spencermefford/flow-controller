import React from 'react';
import useFlowController from '../hooks/useFlowController';

const InnerTwo = () => {
  const onNext = useFlowController();
  return (
    <>
      <div>InnerTwo</div>
      <div>
        <button
          type="button"
          onClick={() => {
            onNext('InnerTwo');
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default InnerTwo;
