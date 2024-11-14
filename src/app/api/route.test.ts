import { GET } from "./route";

describe("GET function", () => {
  it("should return a response with status 200 and correct text", async () => {
    // Call the GET function
    const response = await GET();

    // Assertions
    expect(response.status).toBe(200);
    const text = await response.text();
    expect(text).toBe("Hello, FirstDay!");
  });
});
