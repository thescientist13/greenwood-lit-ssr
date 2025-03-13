// Greenwood Raw plugin
declare module "*?type=raw" {
  const content: string;
  export default content;
}

// JSON Modules (Import Attributes)
declare module "*.json" {
  const contents: object;

  export default contents;
}