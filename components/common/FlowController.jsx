import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import FlowControllerContext from '../../context/FlowControllerContext';

const FlowController = ({
  steps,
  onStepChange = () => {},
  onComplete = () => {},
  children,
}) => {
  const history = useHistory();
  const currentIndexRef = useRef(0);

  const handleGotoNext = () => {
    const nextIndex = currentIndexRef.current + 1;

    if (nextIndex < steps.length) {
      const step = steps[nextIndex];
      onStepChange(nextIndex);
      currentIndexRef.current = nextIndex;
      history.push(step.path);
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
  onStepChange: PropTypes.func,
  onComplete: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

FlowController.defaultProps = {
  steps: [],
  onStepChange: () => {},
  onComplete: () => {},
};
export default FlowController;
