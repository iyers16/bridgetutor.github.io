import data from "./bids.json" assert {type : "json"};
const treeString = JSON.stringify(data);
const BidTree = JSON.parse(treeString);
console.log(BidTree);
console.log(treeString);
document.getElementById("demo").innerHTML = treeString;


// Code to retrieve data from xml file
// function getInput() {
// 	var xmlhttp = new XMLHttpRequest();

// 	xmlhttp.onreadystatechange = function() {
// 		if (this.readyState == 4 && this.status == 200) {
// 			//"this" returns entire xml object, response & responseText properties of xml object return xml content
// 			console.log(this.response);
// 			// document.getElementById("demo").innerHTML = this.response;
// 			testXMLParser(this);
// 		}
// 	};

// 	xmlhttp.open("GET", "bids.xml" , true);
// 	xmlhttp.send();
// }

// //Test function to parse and display XML data
// function testXMLParser(xml) {

// 	var xmlDoc = xml.responseXML;
// 	// var txt = "";
// 	var x = xmlDoc.getElementsByTagName("Name")[0].childNodes[0].nodeValue;

    
// 	// for (let i = 0; i< x.length; i++) {
// 	// 	txt += x[i].childNodes[0].nodeValue + "<br>";
// 	// }

// 	document.getElementById("demo").innerHTML = x;
// }

// document.addEventListener("DOMContentLoaded", () => {
//     // Functions output will show in the console as soon as the index.html is opened
// 	getInput();
// });







// let c = 0;
// function display1C() {
//     ++c;
//     if (c % 2 != 0) {
//         document.getElementById("1cdescription").style.display = "block";
//         document.getElementById("on1c").style.display = "block";
        
//     } else {
//         document.getElementById("1cdescription").style.display = "none";
//         document.getElementById("on1c").style.display = "none";        
//     }
    
// }

// let ctr = 0;
// function display1D() {
//     ++ctr;
//     if (ctr % 2 != 0) {
//         document.getElementById("1ddescription").style.display = "block";
//         document.getElementById("on1d").style.display = "block";
//     } else {
//         document.getElementById("1ddescription").style.display = "none";
//         document.getElementById("on1d").style.display = "none";
//     }
// }

// let counter = 0;
// function display1H1S() {
//     ++counter;
//     if(counter % 2 != 0) {
//         document.getElementById("1h1sdescription").style.display = "block";
//         document.getElementById("on1h1s").style.display = "block";
//     } else {
//         document.getElementById("1h1sdescription").style.display = "none";
//         document.getElementById("on1h1s").style.display = "none";
//     }
// }

// let cr = 0;
// function display1NT() {
//     ++cr;
//     if(cr % 2 != 0) {
//         document.getElementById("1ntdescription").style.display = "block";
//         document.getElementById("on1nt").style.display = "block";
//     } else {
//         document.getElementById("1ntdescription").style.display = "none";
//         document.getElementById("on1nt").style.display = "none";
//     }
// }

// let co = 0;
// function displayp2nt() {
//     ++co;
//     if (co % 2 != 0) {
//         document.getElementById("p2ntdescription").style.display = "block";
//         document.getElementById("onp2nt").style.display = "block";
//     } else {
//         document.getElementById("p2ntdescription").style.display = "none";
//         document.getElementById("onp2nt").style.display = "none";
//     }
// }

// let cter = 0;
// function displayp3nt() {
//     ++cter;
//     if (cter % 2 != 0) {
//         document.getElementById("p3ntdescription").style.display = "block";
//     } else {
//         document.getElementById("p3ntdescription").style.display = "none";
//     }
// }

