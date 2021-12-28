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

// Code to retrieve data from xml file
/*There may be an error in the format of the file as the data does print in the console but it doesn't like the
format of the xml file for some reason*/
// Additionally, this function will only work if CORS permissions are disabled as it has to acess the local computer
// This error will not occur if everything is on a server
function getInput() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this);
      }
    };
    xmlhttp.open("GET", "bids.xml" , true);
    xmlhttp.send();
}

document.addEventListener("DOMContentLoaded", () => {
    // Functions output will show in the console as soon as the index.html is opened
    getInput();
});
