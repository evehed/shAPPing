var ShoppingModel = function () {

  let shoppingCart = [];
  var observers = [];
  var searchFilter = "";
  var currentProduct ="";

  var allGroceries = [{
    "id": 49993,
    "title": "Milk",
    "section":"dairy",
    "description": "Milk is a white liquid produced by the mammary glands of mammals. It is the primary source of nutrition for infant mammals (including humans who are breastfed) before they are able to digest other types of food. ",
    "price": 14 ,
    "img": "https://www.cannadish.net/wp-content/uploads/2017/06/milk.jpg"

  },
  {
    "id": 537176,
    "title": "Bulgur",
    "section": "grain",
    "description": "Bulgur is recognized as a whole grain by the United States Department of Agriculture.[3] Bulgur is sometimes confused with cracked wheat, which is crushed wheat grain that has not been parboiled.[4] Instead, bulgur is cracked wheat that has been partially cooked. Bulgur is a common ingredient in cuisines of many countries of the Middle East and Mediterranean Basin.",
    "price": 10,
    "img": "http://dieteticdirections.com/wp-content/uploads/2014/06/5.jpg"

  }];

  var modelCart = [{
    "id": 49993,
    "title": "Milk",
    "section":"dairy",
    "description": "Milk is a white liquid produced by the mammary glands of mammals. It is the primary source of nutrition for infant mammals (including humans who are breastfed) before they are able to digest other types of food. ",
    "price": 14 ,
    "img": "https://www.cannadish.net/wp-content/uploads/2017/06/milk.jpg"

  },
  {
    "id": 537176,
    "title": "Bulgur",
    "section": "grain",
    "description": "Bulgur is recognized as a whole grain by the United States Department of Agriculture.[3] Bulgur is sometimes confused with cracked wheat, which is crushed wheat grain that has not been parboiled.[4] Instead, bulgur is cracked wheat that has been partially cooked. Bulgur is a common ingredient in cuisines of many countries of the Middle East and Mediterranean Basin.",
    "price": 10,
    "img": "http://dieteticdirections.com/wp-content/uploads/2014/06/5.jpg"

  }];



  var notifyObservers = function(obj) {
  for(var i=0; i<observers.length; i++){
    observers[i].update(obj);
  }
}

this.addObserver = function(observer) {
  observers.push(observer);
}


  this.addToCart = function (product) {
    shoppingCart.push(product)
  }

  this.removeFromCart = function (product) {
    console.log("deleting"+product)
    console.log(modelCart.length)
    for (var index = 0; index < modelCart.length; index++) {
      if (modelCart[index].id === product) {
        modelCart.splice(index, 1);
      }
    }
    notifyObservers()
  }
  this.setSearchFilter = function(val){
    searchFilter = val;
    console.log("filter :"+searchFilter)
    notifyObservers();
  }
  this.setCurrentProduct = function(p){
    currentProduct = p;
    notifyObservers();
  }
  this.getCurrentProductInfo = function(){
    return currentProduct;
  }
  this.getAllGroceries = function(){
    return allGroceries;
  }
  this.getFilteredGroceries = function(){

        return allGroceries.filter(function(g) {


          var found = true;
          if(!searchFilter == ""){
            console.log("inne")
            found = false;
            if(g.title.indexOf(searchFilter) != -1)
            {
              found = true;
            }
            return g.title == searchFilter && found;
          }
          else{
            return found;
          }
        });


  }
  this.getShoppingCart = function(){
    return modelCart;
  }




}
