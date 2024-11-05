import { GET } from "./route";

describe("GET function", () => {
  it("should return a response with status 200 and correct text", async () => {
    // Create a mock Request object
    const request = new Request("http://localhost/api");

    // Call the GET function
    const response = await GET(request);

    // Assertions
    expect(response.status).toBe(200);
    const text = await response.text();
    expect(text).toBe("Hello, FirstDay!");
  });
});
