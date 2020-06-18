import React from 'react';
import useFlowController from '../../hooks/useFlowController';

const InnerTwo = () => {
  const gotoNext = useFlowController();
  return (
    <>
      <div>InnerTwo</div>
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

export default InnerTwo;
