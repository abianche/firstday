import { getErrorMessage } from "./genericUtils";

describe("getErrorMessage", () => {
  it("should return the message from an Error object", () => {
    const error = new Error("Test error message");
    const result = getErrorMessage(error);
    expect(result).toBe("Test error message");
  });

  it("should return a default message for non-Error values (e.g., string)", () => {
    const error = "This is a string error";
    const result = getErrorMessage(error);
    expect(result).toBe("An unexpected error occurred");
  });

  it("should return a default message for undefined", () => {
    const result = getErrorMessage(undefined);
    expect(result).toBe("An unexpected error occurred");
  });

  it("should return a default message for null", () => {
    const result = getErrorMessage(null);
    expect(result).toBe("An unexpected error occurred");
  });
});
