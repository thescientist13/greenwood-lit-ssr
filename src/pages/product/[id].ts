import { html } from "lit";
import { getProductById } from '../../services/products.ts';
import '../../components/card/card.ts';
import type { Compilation, Page } from "@greenwood/cli";

type Params = {
  id: string
}

export async function getBody(compilation: Compilation, page: Page, request: Request, params: Params) {
  const product = await getProductById(params.id);
  const { title, thumbnail } = product;

  return html`
    <app-card
      title="${title}"
      thumbnail="${thumbnail}"
    ></app-card>
  `;
}