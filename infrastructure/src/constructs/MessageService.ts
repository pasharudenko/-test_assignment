import * as path from "path";
import { Construct } from "constructs";
import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { RestApiService } from "./RestApiService";
import { lambdaLayersDirPath, createNodeJsLambda } from "../helpers";

export class MessageService extends Construct {
  constructor(scope: Construct, id: string, restApi: RestApiService) {
    super(scope, id);

    const utilsLambdaLayerPath = path.resolve(
      lambdaLayersDirPath,
      "utils-lambda-layer"
    );

    const utilsLambdaLayer = new lambda.LayerVersion(this, "utilsLambdaLayer", {
      code: lambda.Code.fromAsset(utilsLambdaLayerPath),
      compatibleRuntimes: [lambda.Runtime.NODEJS_20_X],
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const messageProccessLambda = createNodeJsLambda({
      scope: this,
      lambdaName: "messageProccess",
      handler: "messageProccess",
      lambdaRelPath: "message-proccess/index.ts",
      initialPolicy: [],
      lambdaLayers: [utilsLambdaLayer],
      environment: {},
    });

    restApi.addRestApiMethod("POST", messageProccessLambda);
  }
}
