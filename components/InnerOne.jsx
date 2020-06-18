import React, { useContext } from 'react';
import FlowControllerContext from '../context/FlowControllerContext';

const InnerOne = () => {
  const onNext = useContext(FlowControllerContext);
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
