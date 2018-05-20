var PressInfo = function (model, element){
    console.log("PressInfo skapad!")
  //Info is displayed when you scan a item


    this.update = function() {
        console.log("PressInfo update körs!")

        var g = model.getCurrentProductInfo();
        var b = model.getAllGroceries()
        //console.log(b.length)
        // console.log("här är b"+b)
         //console.log("här e g: "+g)
        if (g !== "") {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            var groceryNode = document.createElement("ons-card");

            //var string = "productInfoPage("+g+")";
            //groceryNode.setAttribute("onclick","productInfoPage("+g.id+")");
            var groceriesTitle = document.createElement("h4");
            var groceriesSection = document.createElement("h6");
            var groceriesDescription = document.createElement("h8");
            var addButton = document.createElement("button");
            addButton.className = "btn btn-outline-success";
            // addButton.setAttribute("onclick", "model.addToCart("+g.id+")");
            addButton.setAttribute("onclick", "catchAddToCart("+g.id+")");
            var successMessage = document.createElement("p");
            successMessage.setAttribute("id", "success-message");
            successMessage.className = "alert alert-success";
            successMessage.style.display = "none";

            //console.log("gid!! " + g.id)

            var textNodeTitle = document.createTextNode(g.title);
            var textNodeSection = document.createTextNode("Section: "+ g.section);
            var textNodeDescription = document.createTextNode(g.description);
            var textNodedeButton = document.createTextNode("Add to cart");


            groceriesDescription.appendChild(textNodeDescription);
            groceriesTitle.appendChild(textNodeTitle);
            groceriesSection.appendChild(textNodeSection);
            groceriesTitle.setAttribute("title", g.title);
            addButton.appendChild(textNodedeButton);

            groceryNode.appendChild(groceriesTitle);
            groceryNode.appendChild(groceriesSection);
            groceryNode.appendChild(groceriesDescription);
            groceryNode.appendChild(addButton)
            groceryNode.appendChild(successMessage)
            element.appendChild(groceryNode);
        }
    }
this.update()
model.addObserver(this)

}
