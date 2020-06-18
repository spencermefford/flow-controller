import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import SomeInnerFlow from '../components/SomeInnerFlow';
import ComponentOne from '../components/ComponentOne';
import ComponentTwo from '../components/ComponentTwo';
import FlowController from '../components/FlowController';
import ComponentThree from '../components/ComponentThree';

export default function Home() {
  const steps = [
    { path: '/step1', component: 'ComponentOne' },
    { path: '/step2', component: 'ComponentTwo' },
    { path: '/step3', component: 'SomeInnerFlow' },
    { path: '/step4', component: 'ComponentThree' },
  ];

  return (
    <div className="container">
      <h1>MY FLOW:</h1>
      <MemoryRouter initialEntries={['/step1']}>
        <FlowController steps={steps}>
          {({ gotoNext }) => (
            <>
              <Route exact path="/step1">
                <ComponentOne />
              </Route>
              <Route exact path="/step2">
                <ComponentTwo />
              </Route>
              <Route exact path="/step3">
                <SomeInnerFlow onComplete={() => gotoNext('SomeInnerFlow')} />
              </Route>
              <Route exact path="/step4">
                <ComponentThree />
              </Route>
            </>
          )}
        </FlowController>
      </MemoryRouter>
    </div>
  );
}
