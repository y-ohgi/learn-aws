import path = require('path');
import * as cdk from 'aws-cdk-lib';
import { FunctionUrlAuthType, Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export class LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda = new NodejsFunction(this, "UrlFunction", {
      entry: path.join(__dirname, "../functions/index.ts"),
      runtime: Runtime.NODEJS_18_X,
      handler: "handler",
    })

    lambda.addFunctionUrl({
      authType: FunctionUrlAuthType.NONE,
    })
  }
}