import type * as Http from "../protocols/http";
import { MissignParamError } from "../erros/missignParamError";
import { badRequest } from "../helpers/httpHelper";

export class SignUpController {
  handle(httpRequest: Http.Request): Http.Response | undefined {
    const requiredFields = ["name", "email"];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissignParamError(field));
      }
    }
  }
}
