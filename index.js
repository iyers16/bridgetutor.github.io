let c = 0;
function display1C() {
    ++c;
    if (c % 2 != 0) {
        document.getElementById("1cdescription").style.display = "block";
        document.getElementById("on1c").style.display = "block";
        
    } else {
        document.getElementById("1cdescription").style.display = "none";
        document.getElementById("on1c").style.display = "none";        
    }
    
}

let ctr = 0;
function display1D() {
    ++ctr;
    if (ctr % 2 != 0) {
        document.getElementById("1ddescription").style.display = "block";
        document.getElementById("on1d").style.display = "block";
    } else {
        document.getElementById("1ddescription").style.display = "none";
        document.getElementById("on1d").style.display = "none";
    }
}

let counter = 0;
function display1H1S() {
    ++counter;
    if(counter % 2 != 0) {
        document.getElementById("1h1sdescription").style.display = "block";
        document.getElementById("on1h1s").style.display = "block";
    } else {
        document.getElementById("1h1sdescription").style.display = "none";
        document.getElementById("on1h1s").style.display = "none";
    }
}

let cr = 0;
function display1NT() {
    ++cr;
    if(cr % 2 != 0) {
        document.getElementById("1ntdescription").style.display = "block";
        document.getElementById("on1nt").style.display = "block";
    } else {
        document.getElementById("1ntdescription").style.display = "none";
        document.getElementById("on1nt").style.display = "none";
    }
}

let co = 0;
function displayp2nt() {
    ++co;
    if (co % 2 != 0) {
        document.getElementById("p2ntdescription").style.display = "block";
        document.getElementById("onp2nt").style.display = "block";
    } else {
        document.getElementById("p2ntdescription").style.display = "none";
        document.getElementById("onp2nt").style.display = "none";
    }
}

let cter = 0;
function displayp3nt() {
    ++cter;
    if (cter % 2 != 0) {
        document.getElementById("p3ntdescription").style.display = "block";
    } else {
        document.getElementById("p3ntdescription").style.display = "none";
    }
}