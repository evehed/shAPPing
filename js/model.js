var ShoppingModel = function () {

<<<<<<< HEAD
let shoppingCart = []

this.addToCart = function (product) {
    shoppingCart.push(product)
};

this.removeFromCart = function (product) {
    for (var index = 0; index < shoppingCart.length; index++) {
        if (shoppingCart[index].id === product.id) {
            shoppingCart.splice(index, 1);
        }
    }
}


}
=======
    let shoppingCart = []
    
    this.addToCart = function (product) {
        shoppingCart.push(product)
    }
    
    this.removeFromCart = function (product) {
        for (var index = 0; index < shoppingCart.length; index++) {
            if (shoppingCart[index].id === product.id) {
                shoppingCart.splice(index, 1);
            }
        }
    }
    
    }
>>>>>>> master
