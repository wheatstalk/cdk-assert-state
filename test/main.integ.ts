import { App, Stack } from 'aws-cdk-lib';
import { Chain, Pass } from 'aws-cdk-lib/aws-stepfunctions';
import { Assert, ExpectState, Expr } from '../src';
import { IntegrationTest } from '../src/integration-test';

class StateMachine extends IntegrationTest {}

const app = new App();
const stack = new Stack(app, 'integ-cdk-sfn-integ');

const input = new Pass(stack, 'TestInput', {
  parameters: {
    integ: true,
    number: 1,
  },
});

const expect = new ExpectState(stack, 'TestExpect', {
  assert: Assert.expressions([
    Expr.expect(Expr.input()).toEqual(
      Expr.objectContaining({
        integ: true,
        number: Expr.anything(),
      }),
    ),
    Expr.expect(Expr.input('number')).not.toEqual(2),
  ]),
});

new StateMachine(stack, 'Test', {
  definition: Chain.start(input)
    .next(expect),
});

app.synth();