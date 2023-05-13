export default function handler(request, response) {
  response.status(200).json({
    body: 'Hello World',
    query: request.query,
    cookies: request.cookies,
  });
}