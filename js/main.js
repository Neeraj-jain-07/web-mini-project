let a = document.getElementById("r-cont-item");

const tog = () => {
    console.log("enter tog function")
    // a.style.display = "none";
    if (a.style.display == "none") {
        a.style.display = "block"
        console.log("first")
    }
    else {
        console.log("second")
        a.style.display = "none";
    }
}