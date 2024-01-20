sessionStorage.setItem("name", "Arnav");
sessionStorage.setItem("fruit", "Apple");
sessionStorage.setItem("hard", "solid");

sessionStorage.getItem("name");
sessionStorage.getItem("fruit");

// sessionStorage.removeItem("fruit");
// sessionStorage.clear();

window.onstorage = function(e){ // do changes directly in console and see on other same tab
    alert("Changed");
    console.log(e)  // e is event
}
