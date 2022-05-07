console.log("hello");
const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
// console.log(bar)

if (bar) {
    bar.addEventListener("click", () => {
        navbar.classList.add("active");
        // console.log(navbar)
    })
} else {
    console.log(navbar)
}

const close = document.getElementById("close");
if (close) {
    close.addEventListener("click", () => {
        navbar.classList.remove("active");
    })
}

// sign up
function signup(e) {
    let text2;
    
    if (confirm("Press a button!") == true) {
        text2 = "You pressed signUp!";
        // e.preventDefault();
    } else {
        text2 = "You canceled!";
    }
    console.log( document.getElementById("text"));
    document.getElementById("text").innerHTML = text2;
}

// product page
const prodetails=document.getElementById("prodetails");
console.log(prodetails)