var PressInfo = function (model, element){
  //Info is displayed when you scan a item
  this.update = function(){
    console.log("här e g"+g)
    var g = getCurrentProductInfo()
    if(g != ""){
    var grocerienode = document.createElement("ons-card");

    //var string = "productInfoPage("+g+")";
    grocerienode.setAttribute("onclick","productInfoPage("+g.id+")");
    var groceriestitle = document.createElement("h2");
    var groceriessection = document.createElement("h4");
    var textnodetitle = document.createTextNode(g.title);
    var textnodesection = document.createTextNode("Section: "+ g.section);

    groceriestitle.appendChild(textnodetitle);
    groceriessection.appendChild(textnodesection);
    groceriestitle.setAttribute("title", g.title);
    grocerienode.appendChild(groceriestitle);
    grocerienode.appendChild(groceriessection);
    element.appendChild(grocerienode);
  }

}
model.addObserver(this)

}
