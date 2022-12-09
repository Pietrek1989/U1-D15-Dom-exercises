function next(which) {
  console.log(`\n-------------------${which}-------------------\n`);
}
next(21);

let x = "John";
let y = "Doe";
console.log(`${x} <> ${y}`);

next(22);

let obj = {
  name: "Piotr",
  surname: "Rodzen",
  email: "rodzyn1989",
};
console.log(obj);

next(23);

delete obj.email;
console.log(obj);

next(24);

let arr = [
  "This",
  "is",
  "a",
  "string",
  "with",
  "a",
  "ten",
  "elements",
  "in",
  "it",
];
next(25);

console.log(arr);

next(26);

let emptyArr = [];
for (let i = 0; i < 100; i++) {
  emptyArr.push(Math.floor(Math.random() * 100));
}
console.log(emptyArr);

next(27);

function maxAndMin(arrayToCheck) {
  console.log(arrayToCheck);
  let max = Math.max(...arrayToCheck);
  let min = Math.min(...arrayToCheck);
  return console.log(
    `The biggest number in this array: ${max} and the smallest one is ${min}`
  );
}
maxAndMin(emptyArr);

next(28);

let arrayBigger = [];
let smallerArray = [];
for (let i = 0; i < 10; i++) {
  smallerArray.push(Math.floor(Math.random() * 100));
  arrayBigger.push(smallerArray);
}
console.log(arrayBigger);

next(29);

function whichLonger(arr1, arr2) {
  if (arr1.length > arr2) {
    return console.log("The first array", arr1);
  } else {
    return console.log("The second array", arr2);
  }
}
whichLonger(emptyArr, arrayBigger);

next(30);

let arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8];
let arrofNum2 = [10, 10, 10, 10, 10];

function sumBigger(arr1, arr2) {
  let result1 = 0;
  let result2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    result1 += arr1[i];
  }
  for (let j = 0; j < arr2.length; j++) {
    result2 += arr2[j];
  }
  if (result1 > result2) {
    console.log(
      "The first array sum is bigger which is",
      result1,
      "compared to",
      result2
    );
  } else {
    console.log(
      "The second array sum is bigger which is",
      result2,
      "compared to",
      result1
    );
  }
}
console.log(sumBigger(arrOfNum, arrofNum2));

next("DOM EXERCISES");

// 31

document.getElementById("container");

// 32

let td = document.getElementsByTagName("td");

// 33

function tdText(generated) {
  for (const iterator of td) {
    iterator.innerText = generated;
  }
}

// 34

function changeHeading(newTitle) {
  document.getElementById("title").innerText = newTitle;
}

// 35

function createRow() {
  let table = document.getElementsByTagName("table")[0];
  let newRow = document.createElement("tr");
  newRow.innerText = "I'm new here";
  table.appendChild(newRow);
}

// 36
function addClassToRow() {
  let row = document.getElementsByTagName("tr");
  for (let iterator of row) {
    iterator.classList.add("test");
  }
}

// 37

function linkBackground() {
  let links = document.getElementsByTagName("a");
  for (const iterator of links) {
    iterator.style.background = "red";
  }
}

// 38

window.onload = console.log("loaded");

// 39

function addItems() {
  let unorderedList = document.getElementsByTagName("ul")[0];
  let newList = document.createElement("li");
  newList.innerText = "Im new here";
  unorderedList.appendChild(newList);
}

// 40

function emptyList() {
  let listItems = document.getElementsByTagName("li");
  for (const iterator of listItems) {
    iterator.innerText = "";
  }
}

// 41

function linkAlert() {
  alert(this.href);
}
let link = document.getElementsByTagName("a");
for (const iterator of link) {
  iterator.addEventListener("mouseover", linkAlert);
}

// 42

function hideImages() {
  let images = document.querySelectorAll("img");
  for (const iterator of images) {
    iterator.style.visibility = "hidden";
  }
}

// 43

function toggleTabble() {
  let table = document.getElementById("table");
  table.classList.toggle("hide");
}

// 44

function calculateTableSum() {
  let td = document.querySelectorAll("td");
  let th = document.querySelectorAll("th");
  console.log(td);
  console.log(th);
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < td.length; i++) {
    let value = td[i].innerText;
    value = parseInt(value);
    if (isNaN(value)) {
      console.log(value, "is NaN");
    } else {
      sum1 += value;
    }
  }
  for (let j = 0; j < th.length; j++) {
    let value2 = th[j].innerText;
    value2 = parseInt(value2);
    if (isNaN(value2)) {
      console.log(value2, "is NaN");
    } else {
      sum2 += value2;
    }
  }
  alert(sum1 + sum2);
}

//45
let header = document.getElementById("title");
header.addEventListener("click", deleteLetter);

function deleteLetter() {
  let cut = header.innerText.slice(0, -1);
  header.innerText = cut;
}

//46

function changeBackground(event) {
  console.log(event);
  event.target.style.background = "red";
}

let elements = document.querySelectorAll("td");
for (const iterator of elements) {
  iterator.addEventListener("click", changeBackground);
}

//47

function deleteRandomTd() {
  let element = document.querySelectorAll("td");
  console.log(element);
  let randomNumber = Math.floor(Math.random() * element.length);
  console.log(randomNumber);
  let random = element[randomNumber];
  random.parentNode.removeChild(random);
}

//48

function addPink(event) {
  console.log("event");
  event.target.style.border = "solid 10px pink";
}

for (const iterator of elements) {
  iterator.addEventListener("mouseover", addPink);
}

// 49

function createTable() {
  let newTable = document.createElement("table");
  document.getElementById("last-section").appendChild(newTable);
  console.log(newTable);
  for (let i = 1; i <= 5; i++) {
    let newRow = document.createElement("tr");
    newTable.appendChild(newRow);
    for (let j = 1; j <= 4; j++) {
      let newCol = document.createElement("td");
      newCol.innerText = j;
      newCol.classList.add("border");
      newRow.appendChild(newCol);
    }
  }
  console.log(newTable);
}

//50

function removeTable() {
  let table = document.querySelectorAll("table");
  let last = table[table.length - 1];
  last.parentNode.removeChild(last);
}
