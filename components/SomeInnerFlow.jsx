import React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter, Route } from 'react-router-dom';
import InnerOne from './InnerOne';
import InnerTwo from './InnerTwo';
import FlowController from './FlowController';

const SomeInnerFlow = ({ onComplete }) => {
  const steps = [
    { path: '/inner1', component: 'InnerOne' },
    { path: '/inner2', component: 'InnerTwo' },
  ];

  return (
    <MemoryRouter initialEntries={['/inner1']}>
      <FlowController steps={steps} onComplete={onComplete}>
        <Route exact path="/inner1">
          <InnerOne />
        </Route>
        <Route exact path="/inner2">
          <InnerTwo />
        </Route>
      </FlowController>
    </MemoryRouter>
  );
};

SomeInnerFlow.propTypes = {
  onComplete: PropTypes.func,
};

SomeInnerFlow.defaultProps = {
  onComplete: () => {},
};

export default SomeInnerFlow;
