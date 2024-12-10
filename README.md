# greenwood-lit-ssr

A demonstration repo for deploying a full-stack [**Greenwood**](https://www.greenwoodjs.dev/) app using [Lit](https://lit.dev/) SSR with Vercel static hosting and Serverless + Edge functions.

You can see the live demo at [https://greenwood-lit-ssr.vercel.app/](https://greenwood-lit-ssr.vercel.app/).

> _It is based on [this](https://github.com/ProjectEvergreen/greenwood-demo-adapter-vercel) Greenwood demo._

## Setup

To run locally:
1. Install [**pnpm**](https://pnpm.io/installation)
1. Clone the repo
1. Run `pnpm i`

You can now run these npm scripts
- `pnpm dev` - Start the demo with Greenwood local dev server
- `pnpm start` - Start the demo with a production Greenwood build

> 👉 **Note**: _If deploying to your own Vercel instance, make sure you set the NodeJS version to `18.x` in your Vercel project's General settings_.

## Status

|Feature    |Greenwood |Serverless|Edge|
|---------- |----------|----------|----|
|API Routes |   ✅     |  ✅      | ❓ |
|SSR Pages  |   ⚠️      |  ⚠️       | ❓ |

### Known Issues
1. [ ] [Lit SSR does not support `async` component work](https://github.com/thescientist13/greenwood-demo-adapter-vercel-lit/issues/3)
1. [x] [Declarative Shadow DOM support](https://github.com/thescientist13/greenwood-demo-adapter-vercel-lit/issues/4)