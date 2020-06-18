import React, { useContext } from 'react';
import FlowControllerContext from '../context/FlowControllerContext';

const InnerTwo = () => {
  const onNext = useContext(FlowControllerContext);
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
