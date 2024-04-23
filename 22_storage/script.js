// localStorage.setItem(key,value)
// both the key and value should always be string

localStorage.setItem("name", "bob");

let x = localStorage.getItem("name");
console.log(x);

localStorage.removeItem("name");

// session

sessionStorage.setItem("name", "john");
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");

// update

localStorage.setItem("name", "bob");

// cookies
document.cookie = "name=ram;expires=" + new Date(2025, 0, 1).toUTCString;
document.cookie = "lastName=smith";
console.log(document.cookie);
