import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import FlowControllerContext from '../../context/FlowControllerContext';

const FlowController = ({ steps, onComplete, children }) => {
  const history = useHistory();
  const currentIndexRef = useRef(0);

  const handleGotoNext = () => {
    const nextIndex = currentIndexRef.current + 1;

    if (nextIndex < steps.length) {
      const step = steps[nextIndex];
      history.push(step.path);
      currentIndexRef.current = nextIndex;
    } else if (onComplete) onComplete();
  };

  return (
    <FlowControllerContext.Provider value={handleGotoNext}>
      {_.isFunction(children)
        ? children({ gotoNext: handleGotoNext })
        : children}
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
