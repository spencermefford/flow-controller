import React, { useContext } from 'react';
import FlowControllerContext from '../context/FlowControllerContext';

const ComponentOne = () => {
  const onNext = useContext(FlowControllerContext);
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
