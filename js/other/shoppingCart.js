var ShoppingCart = function (model, element, currenUser){
  //Shopping cart of the items that the user have added (stored in model)
  model.addObserver(this);

  this.update = function(){
    
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }

    

    var shoppingCart = model.returnShoppingCart(currenUser);
    var ost = shoppingCart;
    //console.log("current user i shoppingcart: "+ currenUser)
    var totalPrice = 0
    //console.log(shoppingCart.length)
    element.innerHTML = "Clear"
    var counter = true;
    //console.log(shoppingCart.length)

    for (var i=0; i < shoppingCart.length; i++){
      console.log(shoppingCart.length);
      if(counter){
        element.innerHTML = "Clear"
        counter = false;
      }
      else{
        var card = document.createElement("ons-card")
        card.className = "col-10 mx-auto"
        var info = document.createElement("div")
        info.className = "col-12 mx-auto"
        var row = document.createElement("div")
        row.className = "row"


        // IMAGE INSERT
        var img = document.createElement("IMG")
        img.className = "productImg"
        img.setAttribute("src",shoppingCart[i].img)
        card.appendChild(img)

      //  TITLE INSERT
        var titleDiv = document.createElement("div")
        titleDiv.className = "col-7"
        var p = document.createElement("p")
        var title = document.createTextNode(shoppingCart[i].title)
        p.append(title)
        titleDiv.appendChild(p)
        row.appendChild(titleDiv)
        //
        // // PRICE INSERT
        var priceDiv = document.createElement("div")
        priceDiv.className = "col-3"
        var p = document.createElement("p")
        var price = document.createTextNode(shoppingCart[i].price + " kr")
        p.appendChild(price)
        priceDiv.appendChild(p)
        row.appendChild(priceDiv)
        //
        // // REMOVE BUTTON INSERT
        var removeDiv = document.createElement("div")
        removeDiv.className = "col-1"
        var remove = document.createElement("ons-icon")
        remove.setAttribute("icon","remove")
        //console.log("Här är ett object"+shoppingCart[i].id)
        remove.setAttribute("onClick", "model.removeFromCart(" + shoppingCart[i].id + ")")
        removeDiv.appendChild(remove)
        row.appendChild(removeDiv)

        // // ADD TO TOTAL PRICE
        // totalPrice += shoppingCart[i].price
        info.appendChild(row)
        card.appendChild(info)
        element.appendChild(card)
        //console.log(element);

      }
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

}
