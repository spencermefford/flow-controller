import React from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import FlowControllerContext from '../context/FlowControllerContext';

const FlowController = ({ steps, onComplete, children }) => {
  const history = useHistory();

  const handleNext = (component) => {
    const i = _.findIndex(steps, { component });
    const nextIndex = i + 1;
    console.log('component', component);
    console.log('steps', steps);
    console.log('step', steps[i]);

    if (nextIndex < steps.length) {
      const { path } = steps[i + 1];
      history.push(path);
    } else if (onComplete) onComplete();
  };
  return (
    <FlowControllerContext.Provider value={handleNext}>
      {_.isFunction(children) ? children({ gotoNext: handleNext }) : children}
    </FlowControllerContext.Provider>
  );
};

export default FlowController;
