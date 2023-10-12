import { Buffer } from 'buffer';
import { Readable } from 'stream';

export async function renderFromHTML(template) {
  const stream = Readable.from(template)
  const chunks = [];

  for await (let chunk of stream) {
    chunks.push(Buffer.from(chunk));
  }

  return Buffer.concat(chunks).toString('utf-8');
}