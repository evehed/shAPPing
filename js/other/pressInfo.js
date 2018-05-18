var PressInfo = function (model, element){
  //Info is displayed when you scan a item
  this.update = function(){

    var g = model.getCurrentProductInfo();
    var b = model.getAllGroceries()
    // console.log("här är b"+b)
     console.log("här e g: "+g)
    if(g != ""){
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    var grocerienode = document.createElement("ons-card");

    //var string = "productInfoPage("+g+")";
    //grocerienode.setAttribute("onclick","productInfoPage("+g.id+")");
    var groceriestitle = document.createElement("h4");
    var groceriessection = document.createElement("h6");
    var groceriesdescription = document.createElement("h8");
    var addButton = document.createElement("button");
    addButton.className = "btn btn-outline-success";
    addButton.setAttribute("onclick", "model.addToCart("+g.id+")");

    var textnodetitle = document.createTextNode(g.title);
    var textnodesection = document.createTextNode("Section: "+ g.section);
    var textnodedescription = document.createTextNode(g.description);
    var textnodedebutton = document.createTextNode("Add to cart");


    groceriesdescription.appendChild(textnodedescription);
    groceriestitle.appendChild(textnodetitle);
    groceriessection.appendChild(textnodesection);
    groceriestitle.setAttribute("title", g.title);
    addButton.appendChild(textnodedebutton);

    grocerienode.appendChild(groceriestitle);
    grocerienode.appendChild(groceriessection);
    grocerienode.appendChild(groceriesdescription);
    grocerienode.appendChild(addButton)
    element.appendChild(grocerienode);
  }

}
model.addObserver(this)

}
