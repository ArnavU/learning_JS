// let key = prompt("Enter key");
// let value = prompt("Enter value");

// console.log(localStorage.length);

// localStorage.setItem(key, value);

// console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

// if(key == "red" || key == "blue"){
//     localStorage.removeItem(key);
// }

// if(key == "0"){
//     localStorage.clear();
// }

const createButton = (buttonName) => {
    let myButton = document.createElement("button");
    myButton.innerHTML = buttonName;
    document.body.appendChild(myButton);
    return myButton;
}

const addLocalStorage = () => {
    let myButton = createButton("setItem")
    myButton.onclick = function(){
        key = prompt("Enter key");
        value = prompt("Enter value");

        localStorage.setItem(key, value);

        console.log(`The value at ${key} is ${localStorage.getItem(key)}`);
        
        if(key == "red" || key == "blue"){
            localStorage.removeItem(key);
        }

        if(key == "0"){
            localStorage.clear();
        }
    }
}

const removeLocalStorage = () => {
    let myButton = createButton("removeItem");
    myButton.onclick = function(){
        key = prompt("Enter the key to remove");
        localStorage.removeItem(key);
        console.log("The key-value with key " + key + " and value " + value + " is removed");
    }
}

const clearLocalStorage = () => {
    let myButton = createButton("clear");
    myButton.onclick = function(){
        localStorage.clear();
        alert("Local Storage Cleared");
    }
}

addLocalStorage();
removeLocalStorage();
clearLocalStorage();