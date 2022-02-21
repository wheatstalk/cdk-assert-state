# AWS CDK Assert State

This construct lib provides `AssertState`, a Step Functions State Machine
state that uses expect-like assertions to check input.

```ts
import { App, Stack } from 'aws-cdk-lib';
import { Chain, Pass, StateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { Assert, AssertState, Expr } from '@wheatstalk/cdk-assert-state';

const app = new App();
const stack = new Stack(app, 'integ-cdk-sfn-integ');

const input = new Pass(stack, 'TestInput', {
  parameters: {
    integ: true,
    number: 1,
  },
});

const expect = new AssertState(stack, 'TestAssert', {
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

```