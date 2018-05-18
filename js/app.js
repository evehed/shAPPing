
//We instantiate our model
this.model = new ShoppingModel();


var searchElement = document.getElementById("search.html");
var printSearch = document.getElementById("search");
var scanElement = document.getElementById("scanProduct.html")
var payElement = document.getElementById("pay.html")
var cartElement = document.getElementById("shoppingCart.html")
var printCart = document.getElementById("shoppingCart")
var loginElement = document.getElementById("login.html")
var defaultElement = document.getElementById("default-page")
var navbarElement = document.getElementById("navbar")
var productInfoElement = document.getElementById("productInfo.html")
var printproductInfo = document.getElementById("productInfo")


// Logout
const logoutBtn = document.getElementById("logoutBtn");

function start() {
	scanProduct.style.display = "none";
	payElement.style.display = "none";
	productInfoElement.style.display = "none";
	searchElement.style.display = "none";
	shoppingCart.style.display = "none";
	navbarElement.style.display = "none";


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

function enterApp() {
	searchElement.style.display = "block";
	loginElement.style.display = "none"
	navbarElement.style.display = "flex";

}

function loginPage() {
	searchElement.style.display = "none";
	printSearch.style.display = "none";
	scanElement.style.display = "none";
	payElement.style.display = "none";
	cartElement.style.display = "none";
	printCart.style.display = "none";
	loginElement.style.display = "block"
	navbarElement.style.display = "none";
	productInfoElement.style.display = "none";
	printproductInfo.style.display = "none";

}

function searchPage() {
	searchElement.style.display = "block";
	scanElement.style.display = "none";
	payElement.style.display = "none";
	cartElement.style.display = "none";
	productInfoElement.style.display = "none";
	var pressInfo = new PressInfo(model, printproductInfo)

}
function scanPage() {
	var search = new Search(model, printSearch);
	var shoppingCart = new ShoppingCart(model, printCart);
	var pay = new Pay(model, payElement);
	searchElement.style.display = "none";
	scanElement.style.display = "block";
	payElement.style.display = "none";
	cartElement.style.display = "none";
	productInfoElement.style.display = "none";
}

function payPage() {
	searchElement.style.display = "none";
	scanElement.style.display = "none";
	payElement.style.display = "block";
	cartElement.style.display = "none";
	productInfoElement.style.display = "none";

}
function cartPage() {
	searchElement.style.display = "none";
	scanElement.style.display = "none";
	payElement.style.display = "none";
	cartElement.style.display = "block";
	productInfoElement.style.display = "none";
}
function productInfoPage(g) {
	console.log("add vara: " + g)
	model.setCurrentProduct(g);

	searchElement.style.display = "none";
	scanElement.style.display = "none";
	payElement.style.display = "none";
	cartElement.style.display = "none";
	productInfoElement.style.display = "block";

}
//scanPage();
start()





//
// 	var searchElement = document.getElementById("search.html");
//
//   var search = new Search(model, searchElement);
//   var shoppingCart = new ShoppingCart(model);
//   var pressInfo = new PressInfo(model);


// var beaconApp = new BeaconApp(model);

// var searchElement = document.getElementById("search.html")
// searchElement.addEventListener("click", searchPage);
// var scanElement = document.getElementById("scanProduct.html")
// scanElement.addEventListener("click", scanPage);
