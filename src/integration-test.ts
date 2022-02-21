import { CfnResource } from 'aws-cdk-lib';
import { IChainable, StateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';

export interface IntegrationTestProps {
  readonly definition: IChainable;
}

export class IntegrationTest extends Construct {
  constructor(scope: Construct, id: string, props: IntegrationTestProps) {
    super(scope, id);

    const { definition } = props;

    // Create state machine and tag the stack resource with some metadata so
    // `cdk-exec` can find it.
    const sfn = new StateMachine(this, 'StateMachine', { definition });
    const sfnResource = sfn.node.defaultChild as CfnResource;
    sfnResource.addMetadata('integ', id);
  }
}