export const getproduct = (count) => {
  console.log(count);
  const data = fetch(`https://fakestoreapi.com/products/${count}`)
    .then((res) => res.json())
    .then((json) => json);
  return data;
};
