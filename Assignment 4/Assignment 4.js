function doSomething() {
    var inp = document.getElementById("txt-in").value;

    document.getElementById("display").innerHTML = "Hello " + inp;

}

var btn = document.getElementById("btn");
btn.addEventListener("click", doSomething);