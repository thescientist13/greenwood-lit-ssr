// CSS Import Attribute
// TODO - https://github.com/microsoft/TypeScript/issues/46135
declare module "*.json" {
  const contents: object;

  export default contents;
}