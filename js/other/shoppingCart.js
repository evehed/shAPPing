var ShoppingCart = function (model, element){
  //Shopping cart of the items that the user have added (stored in model)

  this.update = function(){
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  //console.log("empty cart: "+element)

  var shoppingCart = model.getShoppingCart();
  console.log("inne i update, shoppongcart: "+ shoppingCart)
  var totalPrice = 0

  for (var i=0; i < shoppingCart.length; i++){
    var card = document.createElement("ons-card")
    var info = document.createElement("div")
    info.className = "col-12"
    var row = document.createElement("div")
    row.className = "row"


    // IMAGE INSERT
    var img = document.createElement("IMG")
    img.className = "productImg"
    img.setAttribute("src",shoppingCart[i].img)
    card.appendChild(img)

  //  TITLE INSERT
    var titleDiv = document.createElement("div")
    titleDiv.className = "col-9"
    var p = document.createElement("p")
    var title = document.createTextNode(shoppingCart[i].title)
    p.append(title)
    titleDiv.appendChild(p)
    row.appendChild(titleDiv)
    //
    // // PRICE INSERT
    var priceDiv = document.createElement("div")
    priceDiv.className = "col-2"
    var p = document.createElement("p")
    var price = document.createTextNode(shoppingCart[i].price)
    p.appendChild(price)
    priceDiv.appendChild(p)
    row.appendChild(priceDiv)
    //
    // // REMOVE BUTTON INSERT
    var removeDiv = document.createElement("div")
    removeDiv.className = "col-1"
    var remove = document.createElement("ons-icon")
    remove.setAttribute("icon","remove")
    remove.setAttribute("onClick", "model.removeFromCart(" + shoppingCart[i].id + ")")
    removeDiv.appendChild(remove)
    row.appendChild(removeDiv)

    // // ADD TO TOTAL PRICE
    // totalPrice += shoppingCart[i].price
    info.appendChild(row)
    card.appendChild(info)
    element.appendChild(card)
  }

  // // ADD TOTAL PRICE TO BOTTOM
  // var item = document.createElement("on-list-item")
  // item.className = "list-item"
  // var totalPriceField = document.createElement("div")
  // totalPriceField.className = "right list-item__right"
  // p = document.createElement("p")
  // p.appendChild(totalPrice)
  // totalPriceField.appendChild(p)
  // item.append(totalPriceField)
  // element.appendChild(item)
  // console.log("Elementet efter update: "+item)
}
this.update();
model.addObserver(this);
}
