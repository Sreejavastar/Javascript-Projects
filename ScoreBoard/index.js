let span1 = document.getElementById("spanner1")
let span2 = document.getElementById("spanner2")

let count1 = 0;
let count2 = 0;

function increment10() {
    count1 += 1;
    span1.innerText = count1;
}
function increment20() {
    count1 += 2;
    span1.innerText = count1;
}
function increment30() {
    count1 += 3;
    span1.innerText = count1;
}
function increment11() {
    count2 += 1;
    span2.innerText = count2;
}
function increment21() {
    count2 += 2;
    span2.innerText = count2;
}

function increment31() {
    count2 += 3;
    span2.innerText = count2;

}
function Reset(){
    count1 = 0;
    count2 = 0;
    span1.innerText = count1;
    span2.innerText = count2;
}

