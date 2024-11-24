type Product = {
  title: string,
  thumbnail: string
}

async function getProducts(): Promise<[Product]> {
  const data = (await fetch(`https://dummyjson.com/products`)
    .then(resp => resp.json()));
  const { products } = data;

  return products;
}

export { getProducts, Product };