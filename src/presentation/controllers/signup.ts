import type * as Http from "../protocols/http";
import { MissignParamError } from "../erros/missignParamError";

export class SignUpController {
  handle(httpRequest: Http.Request): Http.Response {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissignParamError("name"),
      };
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissignParamError("email"),
      };
    } else {
      return {
        statusCode: 200,
        body: "any_body",
      };
    }
  }
}
