import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import FlowController from './common/FlowController';
import SomeInnerFlow from './inner-flow/SomeInnerFlow';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
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
            <Route exact path={steps[0].path}>
              <ComponentOne />
            </Route>
            <Route exact path={steps[1].path}>
              <ComponentTwo />
            </Route>
            <Route exact path={steps[2].path}>
              <SomeInnerFlow onComplete={() => gotoNext()} />
            </Route>
            <Route exact path={steps[3].path}>
              <ComponentThree />
            </Route>
          </>
        )}
      </FlowController>
    </MemoryRouter>
  );
};

export default SomeOuterFlow;
