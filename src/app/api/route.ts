export async function GET(request: Request) {
  return new Response("Hello, FirstDay!", {
    status: 200,
  });
}
