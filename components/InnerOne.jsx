import React from 'react';
import useFlowController from '../hooks/useFlowController';

const InnerOne = () => {
  const onNext = useFlowController();
  return (
    <>
      <div>InnerOne</div>
      <div>
        <button
          type="button"
          onClick={() => {
            onNext('InnerOne');
          }}
        >
          Next
        </button>

      </div>
    </>
  );
};

export default InnerOne;
