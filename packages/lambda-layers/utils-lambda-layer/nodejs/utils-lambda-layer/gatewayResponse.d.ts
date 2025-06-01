import * as lambda from "aws-lambda";
export declare const createSuccessJsonResponse: (body: object) => lambda.APIGatewayProxyResult;
export declare const createErrorJsonResponse: (body: object) => lambda.APIGatewayProxyResult;
