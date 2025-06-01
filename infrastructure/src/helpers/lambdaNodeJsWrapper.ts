import * as path from "path";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as lambdaNodeJs from "aws-cdk-lib/aws-lambda-nodejs";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import { lambdasDirPath } from "./appPaths";
import * as fs from "fs";

export const createNodeJsLambda = ({
  scope,
  lambdaName,
  lambdaRelPath,
  environment,
  handler,
  initialPolicy,
  lambdaLayers,
}: {
  scope: Construct;
  lambdaName: string;
  lambdaRelPath: string;
  handler: string;
  initialPolicy: Array<iam.PolicyStatement>;
  lambdaLayers: Array<lambda.ILayerVersion>;
  environment: Record<string, string>;
}) => {
  const lambdaPath = path.join(lambdasDirPath, lambdaRelPath);

  if (!fs.existsSync(lambdaPath)) {
    throw new Error("lambdaPath does not exist");
  }

  return new lambdaNodeJs.NodejsFunction(scope, lambdaName, {
    entry: lambdaPath,
    handler,
    runtime: lambda.Runtime.NODEJS_20_X,
    initialPolicy,
    layers: lambdaLayers,
    bundling: {
      minify: true,
      externalModules: ["/opt/nodejs/utils-lambda-layer"],
    },
    environment,
  });
};
