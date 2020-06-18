import React from 'react';
import useFlowController from '../hooks/useFlowController';

const InnerOne = () => {
  const gotoNext = useFlowController();

  return (
    <>
      <div>InnerOne</div>
      <br />
      <div>
        <button
          type="button"
          onClick={() => {
            gotoNext('InnerOne');
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default InnerOne;
