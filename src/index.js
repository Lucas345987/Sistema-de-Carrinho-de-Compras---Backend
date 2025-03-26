import crieteItem from "./services/item.js";
import * as cartServicer from "./services/cart.js";

let myCart = [];

const item1 = await crieteItem("Mause", 150, 3);
const item2 = await crieteItem("Teclado", 260, 2);

await cartServicer.addItem(myCart, item1);
await cartServicer.addItem(myCart, item2);

await cartServicer.removeItem(myCart, 1);

await cartServicer.displayItem(myCart);

// await cartServicer.deleteItem(myCart, item2.name);

await cartServicer.calculoTotal(myCart);
