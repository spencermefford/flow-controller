import React, { useContext } from 'react';
import FlowControllerContext from '../context/FlowControllerContext';

const ComponentTwo = () => {
  const onNext = useContext(FlowControllerContext);
  return (
    <>
      <div>ComponentTwo</div>
      <div>
        <button
          type="button"
          onClick={() => {
            onNext('ComponentTwo');
          }}
        >
          Next
        </button>

      </div>
    </>
  );
};

export default ComponentTwo;
