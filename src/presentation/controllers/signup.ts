import type * as Http from "../protocols/http";
import { MissignParamError } from "../erros/missignParamError";
import { badRequest } from "../helpers/httpHelper";
import { type Controller } from "../protocols/controller";

export class SignUpController implements Controller {
  handle(httpRequest: Http.Request): Http.Response | undefined {
    const requiredFields = ["name", "email", "password", "passwordConfirm"];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissignParamError(field));
      }
    }
  }
}
