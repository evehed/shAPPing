
// Initialize Firebase
var config = {
	apiKey: "AIzaSyDFN8hxCYuOipmB-UWY0JsQPICV6jSqxHM",
	authDomain: "shapping-41333.firebaseapp.com",
	databaseURL: "https://shapping-41333.firebaseio.com",
	projectId: "shapping-41333",
	storageBucket: "shapping-41333.appspot.com",
	messagingSenderId: "987966090005"
};
firebase.initializeApp(config);
//this.database = firebase.firestore();

//We instantiate our model
this.model = new ShoppingModel();

var searchElement = document.getElementById("search.html");
var printSearch= document.getElementById("search");
var scanElement = document.getElementById("scanProduct.html")
var payElement = document.getElementById("pay.html")
var cartElement = document.getElementById("shoppingCart.html")
var printCart = document.getElementById("shoppingCart")
var loginElement = document.getElementById("login.html")
var defaultElement = document.getElementById("default-page")
var productInfoElement = document.getElementById("productInfo.html")
var printproductInfo = document.getElementById("productInfo")
var signInElement = document.getElementById("logIn.html")
var signUpElement = document.getElementById("signUp.html")
var navBarElement = document.getElementById("navBar.html")

function signUpPage(){
	console.log("signUp")
	searchElement.style.display = "none";
	scanElement.style.display = "none";
	payElement.style.display = "none";
	cartElement.style.display = "none";
	productInfoElement.style.display = "none";
	signInElement.style.display = "none";
	signUpElement.style.display = "block";
	navBarElement.style.display = "none";

}
function signUpUser(){
	this.emailIn = document.getElementById("inputEmailSignUp").value
	this.passwordIn = document.getElementById("inputPasswordSignUp").value

	//Create new user with firebase
	firebase.auth().createUserWithEmailAndPassword(this.emailIn, this.passwordIn)
	var currentUser = firebase.auth().currentUser

	//Create a user instance in database for the created user
		firebase.firestore().doc('users/'+ currentUser.uid).set({
			email: currentUser.email,
		})
		firebase.firestore().doc('users/'+ currentUser.uid).collection('shoppingCart').add({
			p1: "",
			p2: "",
			p3: "",
			p4: "",
		})
		.catch((err) => {
			 	console.log("Error: "+err);
		})
}
function searchPage(){
	searchElement.style.display = "block";
	scanElement.style.display = "none";
	payElement.style.display = "none";
	cartElement.style.display = "none";
	productInfoElement.style.display = "none";
	signInElement.style.display = "none"
	signUpElement.style.display = "none"
	navBarElement.style.display = "block";

	var pressInfo = new PressInfo(model, printproductInfo)

}
function scanPage(){

	var search = new Search(model, printSearch);
	var shoppingCart = new ShoppingCart(model, printCart);
	var pay = new Pay(model, payElement);
	searchElement.style.display = "none";
	scanElement.style.display = "block";
	payElement.style.display = "none";
	cartElement.style.display = "none";
	productInfoElement.style.display = "none";
	signInElement.style.display = "none"
	signUpElement.style.display = "none"
	navBarElement.style.display = "block";

}

function payPage(){
	searchElement.style.display = "none";
	scanElement.style.display = "none";
	payElement.style.display = "block";
	cartElement.style.display = "none";
	productInfoElement.style.display = "none";
	signInElement.style.display = "none"
	signUpElement.style.display = "none"
	navBarElement.style.display = "block";


}
function cartPage(){
	searchElement.style.display = "none";
	scanElement.style.display = "none";
	payElement.style.display = "none";
	cartElement.style.display = "block";
	productInfoElement.style.display = "none";
	signInElement.style.display = "none"
	signUpElement.style.display = "none"
	navBarElement.style.display = "block";

}
function productInfoPage(g){
	model.setCurrentProduct(g);

	searchElement.style.display = "none";
	scanElement.style.display = "none";
	payElement.style.display = "none";
	cartElement.style.display = "none";
	productInfoElement.style.display = "block";
	signInElement.style.display = "none"
	signUpElement.style.display = "none"
	navBarElement.style.display = "block";

}

signUpPage();

// var beaconApp = new BeaconApp(model);

// var searchElement = document.getElementById("search.html")
// searchElement.addEventListener("click", searchPage);
// var scanElement = document.getElementById("scanProduct.html")
// scanElement.addEventListener("click", scanPage);
