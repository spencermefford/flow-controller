import React, { useState } from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import _ from 'lodash';
import FlowController from './common/FlowController';
import SomeInnerFlow from './inner-flow/SomeInnerFlow';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';

const getStepIndicator = (index, length) =>
  _.times(length, (i) => `${i === index ? 'X' : 'O'} `);

const SomeOuterFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { path: '/component-one' },
    { path: '/component-two' },
    { path: '/some-inner-flow' },
    { path: '/component-three' },
  ];

  const handleComplete = () => {
    // eslint-disable-next-line no-alert
    // eslint-disable-next-line no-undef
    window.alert(`That's a wrap! The flow is complete`);
  };

  return (
    <div>
      <h2>{getStepIndicator(currentStep, steps.length)}</h2>
      <MemoryRouter initialEntries={[steps[0].path]}>
        <FlowController
          steps={steps}
          onStepChange={setCurrentStep}
          onComplete={handleComplete}
        >
          {({ gotoNext }) => (
            <>
              <Route exact path="/component-one">
                <ComponentOne />
              </Route>
              <Route exact path="/component-two">
                <ComponentTwo />
              </Route>
              <Route exact path="/some-inner-flow">
                <SomeInnerFlow onComplete={() => gotoNext()} />
              </Route>
              <Route exact path="/component-three">
                <ComponentThree />
              </Route>
            </>
          )}
        </FlowController>
      </MemoryRouter>
    </div>
  );
};

export default SomeOuterFlow;
