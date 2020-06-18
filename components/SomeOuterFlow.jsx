import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import SomeInnerFlow from './SomeInnerFlow';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import FlowController from './FlowController';
import ComponentThree from './ComponentThree';

const SomeOuterFlow = () => {
  const steps = [
    { path: '/step1' },
    { path: '/step2' },
    { path: '/step3' },
    { path: '/step4' },
  ];

  const handleComplete = () => {
    // eslint-disable-next-line no-alert
    // eslint-disable-next-line no-undef
    window.alert(`That's a wrap! The flow is complete`);
  };

  return (
    <MemoryRouter initialEntries={['/step1']}>
      <FlowController steps={steps} onComplete={handleComplete}>
        {({ gotoNext }) => (
          <>
            <Route exact path="/step1">
              <ComponentOne />
            </Route>
            <Route exact path="/step2">
              <ComponentTwo />
            </Route>
            <Route exact path="/step3">
              <SomeInnerFlow onComplete={() => gotoNext()} />
            </Route>
            <Route exact path="/step4">
              <ComponentThree />
            </Route>
          </>
        )}
      </FlowController>
    </MemoryRouter>
  );
};

export default SomeOuterFlow;
