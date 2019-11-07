// Exercise 9: Calculate the total value of the Shopping Cart.

function getShoppingCartTotal(shoppingCart) {
    return shoppingCart
        .map(item => item.quantity * item.unitPrice)
        .reduce((totalPrice, itemPrice) => totalPrice + itemPrice, 0);
}

module.exports = getShoppingCartTotal;
