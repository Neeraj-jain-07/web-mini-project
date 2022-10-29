let a = document.getElementById("r-cont-item");

const tog = () => {
    // a.style.display = "none";
    console.log("enter tog function")
    if (a.style.display == "none") {
        a.style.display = "block"
        console.log("first")
    }
    else {
        console.log("second")
        a.style.display = "none";
    }
}