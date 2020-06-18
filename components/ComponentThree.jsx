import React from 'react';
import useFlowController from '../hooks/useFlowController';

const ComponentThree = () => {
  const gotoNext = useFlowController();
  return (
    <>
      <div>ComponentThree</div>
      <br />
      <div>
        <button
          type="button"
          onClick={() => {
            gotoNext('ComponentThree');
          }}
        >
          Done
        </button>
      </div>
    </>
  );
};

export default ComponentThree;
