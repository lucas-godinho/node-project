import type * as Http from "../protocols/http";

export const badRequest = (error: Error): Http.Response => ({
  statusCode: 400,
  body: error,
});
