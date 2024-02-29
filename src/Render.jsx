function renderProductList() {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Carrot", id: 2 },
    { title: "Cauliflower", id: 3 },
  ];

  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));

  return <ul>{listItems}</ul>;
}

export default renderProductList;
