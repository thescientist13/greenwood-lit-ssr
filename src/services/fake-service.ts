export async function fakeService() {
  await import(new URL('https://www.example.com'));
}