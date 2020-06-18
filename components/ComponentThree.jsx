import React, { useContext } from 'react';
import FlowControllerContext from '../context/FlowControllerContext';

const ComponentThree = () => {
  const onNext = useContext(FlowControllerContext);
  return (
    <>
      <div>ComponentThree</div>
      <div>
        <button
          type="button"
          onClick={() => {
            onNext('ComponentThree');
          }}
        >
          Next
        </button>

      </div>
    </>
  );
};

export default ComponentThree;
