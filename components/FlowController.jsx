import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import FlowControllerContext from '../context/FlowControllerContext';

const FlowController = ({ steps, onComplete, children }) => {
  const history = useHistory();

  const handleNext = (component) => {
    const i = _.findIndex(steps, { component });
    const nextIndex = i + 1;

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

FlowController.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.object),
  onComplete: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

FlowController.defaultProps = {
  steps: [],
  onComplete: () => {},
};
export default FlowController;
