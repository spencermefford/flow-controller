import React from 'react';
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

export default SomeInnerFlow;
