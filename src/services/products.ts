type Product = {
  title: string,
  thumbnail: string,
  id: string;
}

async function getProductById(id: number): Promise<Product> {
  return (await fetch(`https://dummyjson.com/products/${id}`)
    .then(resp => resp.json()));
}

async function getProducts(id?: string): Promise<[Product]> {
  const idSuffix = id ? `/${id}` : '';
  const data = (await fetch(`https://dummyjson.com/products${idSuffix}`)
    .then(resp => resp.json()));
  const { products } = data;

  return products;
}

export { getProducts, getProductById };