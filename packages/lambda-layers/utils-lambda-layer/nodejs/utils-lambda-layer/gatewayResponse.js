"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrorJsonResponse = exports.createSuccessJsonResponse = void 0;
const createGatewayResponse = ({ statusCode, body, }) => {
    return {
        statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
        body,
    };
};
const createSuccessJsonResponse = (body) => {
    return createGatewayResponse({
        statusCode: 200,
        body: JSON.stringify(body),
    });
};
exports.createSuccessJsonResponse = createSuccessJsonResponse;
const createErrorJsonResponse = (body) => {
    return createGatewayResponse({
        statusCode: 500,
        body: JSON.stringify(body),
    });
};
exports.createErrorJsonResponse = createErrorJsonResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZXdheVJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2dhdGV3YXlSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFNLHFCQUFxQixHQUFHLENBQUMsRUFDN0IsVUFBVSxFQUNWLElBQUksR0FJTCxFQUFFLEVBQUU7SUFDSCxPQUFPO1FBQ0wsVUFBVTtRQUNWLE9BQU8sRUFBRTtZQUNQLDZCQUE2QixFQUFFLEdBQUc7WUFDbEMsa0NBQWtDLEVBQUUsSUFBSTtTQUN6QztRQUNELElBQUk7S0FDMkIsQ0FBQztBQUNwQyxDQUFDLENBQUM7QUFFSyxNQUFNLHlCQUF5QixHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7SUFDeEQsT0FBTyxxQkFBcUIsQ0FBQztRQUMzQixVQUFVLEVBQUUsR0FBRztRQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztLQUMzQixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFMVyxRQUFBLHlCQUF5Qiw2QkFLcEM7QUFFSyxNQUFNLHVCQUF1QixHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7SUFDdEQsT0FBTyxxQkFBcUIsQ0FBQztRQUMzQixVQUFVLEVBQUUsR0FBRztRQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztLQUMzQixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFMVyxRQUFBLHVCQUF1QiwyQkFLbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSBcImF3cy1sYW1iZGFcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZUdhdGV3YXlSZXNwb25zZSA9ICh7XHJcbiAgc3RhdHVzQ29kZSxcclxuICBib2R5LFxyXG59OiB7XHJcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xyXG4gIGJvZHk6IHN0cmluZztcclxufSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzdGF0dXNDb2RlLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGJvZHksXHJcbiAgfSBhcyBsYW1iZGEuQVBJR2F0ZXdheVByb3h5UmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVN1Y2Nlc3NKc29uUmVzcG9uc2UgPSAoYm9keTogb2JqZWN0KSA9PiB7XHJcbiAgcmV0dXJuIGNyZWF0ZUdhdGV3YXlSZXNwb25zZSh7XHJcbiAgICBzdGF0dXNDb2RlOiAyMDAsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVFcnJvckpzb25SZXNwb25zZSA9IChib2R5OiBvYmplY3QpID0+IHtcclxuICByZXR1cm4gY3JlYXRlR2F0ZXdheVJlc3BvbnNlKHtcclxuICAgIHN0YXR1c0NvZGU6IDUwMCxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gIH0pO1xyXG59O1xyXG4iXX0=