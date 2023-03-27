import { SignUpController } from "./signup";
import { MissignParamError } from "../erros/missignParamError";

describe("SignUp Controller", () => {
  test("Should return 400 if no name is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: "any_email@email.com",
        password: "any_pass",
        passwordConfirm: "any_pass",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse?.statusCode).toBe(400);
    expect(httpResponse?.body).toEqual(new MissignParamError("name"));
  });

  test("Should return 400 if no email is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: "any_name",
        password: "any_pass",
        passwordConfirm: "any_pass",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse?.statusCode).toBe(400);
    expect(httpResponse?.body).toEqual(new MissignParamError("email"));
  });

  test("Should return 400 if no password is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: "any_name",
        email: "any_email@email.com",
        passwordConfirm: "any_pass",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse?.statusCode).toBe(400);
    expect(httpResponse?.body).toEqual(new MissignParamError("password"));
  });

  test("Should return 400 if no passwordConfirm is provided", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: "any_name",
        email: "any_email@email.com",
        password: "any_pass",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse?.statusCode).toBe(400);
    expect(httpResponse?.body).toEqual(
      new MissignParamError("passwordConfirm")
    );
  });
});
