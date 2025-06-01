import { Construct } from "constructs";
import * as apiGateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class RestApiService extends Construct {
  private restApi: apiGateway.RestApi;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.restApi = new apiGateway.RestApi(this, "chatRestApi", {
      defaultCorsPreflightOptions: {
        allowOrigins: apiGateway.Cors.ALL_ORIGINS,
        allowMethods: apiGateway.Cors.ALL_METHODS,
        allowCredentials: true,
        allowHeaders: apiGateway.Cors.DEFAULT_HEADERS,
      },
    });
  }

  addRestApiMethod(httpMethod: string, lambda: lambda.IFunction) {
    this.restApi.root.addMethod(
      httpMethod,
      new apiGateway.LambdaIntegration(lambda)
    );
  }
}
