async function addItem(name, price, amount) {
  return {
    name,
    price,
    amount,
    sumAmount: () => price * amount,
  };
}

export default addItem;
