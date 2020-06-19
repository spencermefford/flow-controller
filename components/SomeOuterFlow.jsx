import React, { useState } from 'react';
import { MemoryRouter, Route, Switch, useHistory } from 'react-router-dom';
import _ from 'lodash';
import FlowController from './common/FlowController';
import SomeInnerFlow from './inner-flow/SomeInnerFlow';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';

const getStepIndicator = (index, length) =>
  _.times(length, (i) => `${i === index ? 'X' : 'O'} `);

const SomeOuterFlow = () => {
  const history = useHistory();

  const steps = [
    { path: '/component-one' },
    { path: '/component-two' },
    { path: '/some-inner-flow' },
    { path: '/component-three' },
  ];
  const startingStep = 0;

  const [currentStep, setCurrentStep] = useState(startingStep);

  const handleComplete = () => {
    // eslint-disable-next-line no-alert
    // eslint-disable-next-line no-undef
    window.alert(`That's a wrap! The flow is complete`);
  };

  return (
    <div>
      <h2>{getStepIndicator(currentStep, steps.length)}</h2>
      <MemoryRouter initialEntries={[steps[startingStep].path]}>
        <FlowController
          steps={steps}
          onStepChange={setCurrentStep}
          onComplete={handleComplete}
        >
          {({ gotoNext }) => (
            <Switch>
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
              <Route
                render={({ location }) => {
                  // This will error there isn't a router at the root of our app, but that's ok
                  // because this is just a POC.
                  history.push(location.pathname); // This is a tricky way for inner components to navigate to routes outside MemoryRouter
                }}
              />
            </Switch>
          )}
        </FlowController>
      </MemoryRouter>
    </div>
  );
};

export default SomeOuterFlow;
