import * as lambda from "aws-lambda";
import { gateway, exception } from "/opt/nodejs/utils-lambda-layer";

export const messageProccess: lambda.APIGatewayProxyHandler = async (
  event: lambda.APIGatewayProxyEvent
) => {
  try {
    if (!event.body) {
      throw new exception.MissingBodyException();
    }
    const body = JSON.parse(event.body);
    body.timestamp = new Date();

    return gateway.createSuccessJsonResponse(body);
  } catch (e: any) {
    return gateway.createErrorJsonResponse(e);
  }
};
