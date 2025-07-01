import type { UpdateModalEvent } from "./modal.ts";

declare global {
  interface GlobalEventHandlersEventMap {
    'update-modal': UpdateModalEvent;
  }
}