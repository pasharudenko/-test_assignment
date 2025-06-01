import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { RestApiService, MessageService } from "../constructs";

export class MessageServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const restApi = new RestApiService(this, "restApiService");

    new MessageService(this, "MessageService", restApi);
  }
}
