var Search = function (model, element){
  //Takes in input from user and display groceries
  //var search = document.getElementById("search")
  //var element = inelement.find("search");
  // var input = inelement.content.getElementById("myInput")

  // var node = document.createElement("ons-search-input");
  // node.setAttribute("placeholder", "Search");
  // node.setAttribute("style", "width: 99%;   margin: auto; display: block;");
  // node.setAttribute("value", "");
  // node.setAttribute("onchange", "setSearchFilter(this.value)");
  // node.setAttribute("id", "myInput");
  // element.appendChild(node);


console.log(element)

  this.update = function(){

    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    //var groceriesArray = model.getAllGroceries()
    var filterGroceries = model.getFilteredGroceries();
    console.log("efter filtering"+filterGroceries)
    filterGroceries.forEach(function(g){


      var grocerienode = document.createElement("ons-card");
      grocerienode.setAttribute("id",g.id);
      grocerienode.setAttribute("class", "col-10 mx-auto")
      grocerienode.setAttribute("value",g);
      grocerienode.setAttribute("onclick","productInfoPage("+g.id+")");
      var groceriestitle = document.createElement("h4");
      var groceriessection = document.createElement("h6");
      var textnodetitle = document.createTextNode(g.title);
      console.log("titlaaarna: "+g.title)
      var textnodesection = document.createTextNode("Section: "+ g.section);

      groceriestitle.appendChild(textnodetitle);
      groceriessection.appendChild(textnodesection);
      groceriestitle.setAttribute("title", g.title);
      grocerienode.appendChild(groceriestitle);
      grocerienode.appendChild(groceriessection);
      element.appendChild(grocerienode);

    })
  }
  this.update();
  model.addObserver(this);

  //model.getFilteredGroceries("hello");


}
