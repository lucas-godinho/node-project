import type * as Http from "../protocols/http";
import { MissignParamError } from "../erros/missignParamError";
import { badRequest } from "../helpers/httpHelper";

export class SignUpController {
  handle(httpRequest: Http.Request): Http.Response {
    if (!httpRequest.body.name) {
      return badRequest(new MissignParamError("name"));
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissignParamError("email"));
    } else {
      return {
        statusCode: 200,
        body: "any_body",
      };
    }
  }
}
