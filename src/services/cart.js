async function addItem(userCart, item) {
  userCart.push(item);
}

async function calculoTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.sumAmount(), 0);
  console.log(
    `🛒 Valor Total do seu carrinho de Compras: R$ ${result} Reais 🛍️`
  );
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function displayItem(userCart) {
  console.log("Seu carrinho de compras!");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | Quantidade: ${
        item.amount
      } Valor total: ${item.sumAmount()} \n`
    );
  });
}

async function removeItem(userCart, index) {
  const deleteIndex = index - 1;
  if (index >= 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1);
  }
}

export { addItem, calculoTotal, deleteItem, removeItem, displayItem };
