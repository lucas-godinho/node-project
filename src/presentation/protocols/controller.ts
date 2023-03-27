import type * as Http from "./http";

export interface Controller {
  handle: (httpRequest: Http.Request) => Http.Response | undefined;
}
