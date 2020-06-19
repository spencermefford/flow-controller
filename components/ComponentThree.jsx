import React from 'react';
import { useHistory } from 'react-router-dom';
import useFlowController from '../hooks/useFlowController';

const ComponentThree = () => {
  const history = useHistory();
  const gotoNext = useFlowController();
  return (
    <>
      <div>ComponentThree</div>
      <br />
      <div>
        <button
          type="button"
          onClick={() => {
            history.push('/foo');
          }}
        >
          Go somewhere else
        </button>
        <button
          type="button"
          onClick={() => {
            gotoNext();
          }}
        >
          Done
        </button>
      </div>
    </>
  );
};

export default ComponentThree;
