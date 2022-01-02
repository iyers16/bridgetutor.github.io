import data from "./bids.json" assert {type : "json"};
const treeString = JSON.stringify(data);
const BidTree = JSON.parse(treeString);
console.log(BidTree.Bids[0].Name);
console.log(BidTree.Bids.length);
console.log(BidTree);
document.getElementById("demo").innerHTML = treeString;

BidTree.Bids.forEach(bid => {
    createButton(bid.Name);
});


function createButton(innerhtml) {
    let btn = document.createElement("button");
    btn.innerHTML = innerhtml;
    document.body.appendChild(btn);
}

