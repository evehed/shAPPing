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
var currenUser;

var searchElement = document.getElementById("search.html");
var printSearch= document.getElementById("search");
var scanElement = document.getElementById("scanProduct.html")
var payElement = document.getElementById("pay.html")
var cartElement = document.getElementById("shoppingCart.html")
var printCart = document.getElementById("shoppingCart")
var loginElement = document.getElementById("logIn.html")
var defaultElement = document.getElementById("default-page")
var productInfoElement = document.getElementById("productInfo.html")
var printproductInfo = document.getElementById("productInfo")
var signInElement = document.getElementById("logIn.html")
var signUpElement = document.getElementById("signUp.html")
var navBarElement = document.getElementById("navBar.html")


// Logout
const logoutBtn = document.getElementById("logoutBtn");


function signUpPage(){
	console.log("signUp")
	searchElement.style.display = "none";
	scanElement.style.display = "none";
	payElement.style.display = "none";
	cartElement.style.display = "none";
	productInfoElement.style.display = "none";
	loginElement.style.display = "none"
	signInElement.style.display = "none";
	signUpElement.style.display = "block";
	navBarElement.style.display = "none";

}
function signUpUser(){
	this.emailIn = document.getElementById("inputEmailSignUp").value
	this.passwordIn = document.getElementById("inputPasswordSignUp").value

	//Create new user with firebase
	firebase.auth().createUserWithEmailAndPassword(this.emailIn, this.passwordIn)
	this.currentUser = firebase.auth().currentUser

	//Create a user instance in database for the created user
		firebase.firestore().doc('users/'+ this.currentUser.uid).set({
			email: this.currentUser.email,
		})
		firebase.firestore().doc('users/'+ this.currentUser.uid).collection('shoppingCart')
		.catch((err) => {
			 	console.log("Error: "+err);
		})
		currenUser = this.currentUser;
		console.log("current user setup:"+currenUser)
}


function start() {
	scanProduct.style.display = "none";
	payElement.style.display = "none";
	productInfoElement.style.display = "none";
	searchElement.style.display = "none";
	shoppingCart.style.display = "none";
	navBarElement.style.display = "none";
	signUpElement.style.display = "none";

	login()
}

// Login
function login() {
	const inputEmail = document.getElementById("inputEmail");
	const inputPassword = document.getElementById("inputPassword");
	const loginBtn = document.getElementById("loginBtn");


	loginBtn.addEventListener("click", e => {
		const email = inputEmail.value;
		const pass = inputPassword.value;
		const auth = firebase.auth();

		// Sign in
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));


	})
}

// OnstateChanged
firebase.auth().onAuthStateChanged(firebaseUser => {
	if (firebaseUser) {
		console.log(firebaseUser);
		this.currentUser = firebase.auth().currentUser
		currenUser = this.currentUser;
		console.log("current user setup:"+currenUser)
		enterApp()


	} else {
		console.log("not logged in");
	}
})

// Logout eventlistener
logoutBtn.addEventListener("click", e => {
	firebase.auth().signOut();
	loginPage()
})


// Enter app when user login
function enterApp() {
	// searchElement.style.display = "block";
  loginElement.style.display = "none"
	navBarElement.style.display = "flex";

	searchPage()



}

function loginPage() {
	searchElement.style.display = "none";
	printSearch.style.display = "none";
	scanElement.style.display = "none";
	payElement.style.display = "none";
	cartElement.style.display = "none";
	//printCart.style.display = "none";
	loginElement.style.display = "block"
	navBarElement.style.display = "none";
	productInfoElement.style.display = "none";
	printproductInfo.style.display = "none";

}



function searchPage(){
	console.log("nu körs search")
	var search = new Search(model, printSearch);
	var shoppingCart = new ShoppingCart(model, printCart, currenUser);
	var pay = new Pay(model, payElement);

	searchElement.style.display = "block";
	scanElement.style.display = "none";
	payElement.style.display = "none";
	cartElement.style.display = "none";
	productInfoElement.style.display = "none";
	signInElement.style.display = "none"
	signUpElement.style.display = "none"
	navBarElement.style.display = "block";


}
function scanPage(){

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

//Kolla på varför denna behövs??? var är den none???
	printCart.style.display = "block";

}
function productInfoPage(g){
	model.setCurrentProduct(g);
	var pressInfo = new PressInfo(model, printproductInfo)
	searchElement.style.display = "none";
	scanElement.style.display = "none";
	payElement.style.display = "none";
	cartElement.style.display = "none";
	productInfoElement.style.display = "block";
	signInElement.style.display = "none"
	signUpElement.style.display = "none"
	navBarElement.style.display = "block";

}
start()

// var beaconApp = new BeaconApp(model);

// var searchElement = document.getElementById("search.html")
// searchElement.addEventListener("click", searchPage);
// var scanElement = document.getElementById("scanProduct.html")
// scanElement.addEventListener("click", scanPage);
