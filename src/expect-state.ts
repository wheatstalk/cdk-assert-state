import { Stack } from 'aws-cdk-lib';
import { INextable, State, StateMachineFragment, TaskInput } from 'aws-cdk-lib/aws-stepfunctions';
import { LambdaInvoke } from 'aws-cdk-lib/aws-stepfunctions-tasks';
import { Construct } from 'constructs';
import { ExpectFunction } from './expect-function';
import { Expr } from './expr';

export interface ExpectStateProps {
  readonly inputPath?: string;
  readonly assert: Assert;
}

export class ExpectState extends StateMachineFragment {
  readonly endStates: INextable[];
  readonly startState: State;

  constructor(scope: Construct, id: string, props: ExpectStateProps) {
    super(scope, id);

    const stack = Stack.of(this);
    const expectFunction = stack.node.tryFindChild('ExpectFunction') as ExpectFunction ?? new ExpectFunction(this, 'ExpectFunction');

    const assertCode = props.assert.renderCode();

    const expectState = new LambdaInvoke(this, 'Expect', {
      lambdaFunction: expectFunction,
      payload: TaskInput.fromObject({
        'input.$': props.inputPath ?? '$',
        'expect': assertCode,
      }),
      payloadResponseOnly: true,
    });

    this.startState = expectState;
    this.endStates = expectState.endStates;
  }
}

export abstract class Assert {
  static expressions(expressions: Expr[]): ExpressionAssertion {
    return new ExpressionAssertion(expressions);
  }

  abstract renderCode(): string;
}

export class ExpressionAssertion extends Assert {
  private readonly statements: Expr[];

  constructor(statements: Expr[]) {
    super();

    this.statements = statements;
  }

  renderCode(): string {
    const statements = this.statements.map(expr => `${expr.renderCode()};`).join('\n');
    return `(expect, input) => {\n${statements}\n}`;
  }
}
