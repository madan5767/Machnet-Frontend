// 1. Changing font color and text classwork

let test = document.getElementById("test");

test.addEventListener("mouseenter", function( event ) {
  event.target.style.color = "red";

  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

test.addEventListener("mouseover", function( event ) {
  event.target.style.color = "yellow";

  setTimeout(function() {
    event.target.style.color = "";
    event.target.innerHTML="hello";
  }, 500);
}, false);

// 2. Adding row on a existing table.

const btn = document.querySelector("button");
    btn.addEventListener("click", function () {
        let tableRef = document.getElementById("my-table");
        let newRow = tableRef.insertRow(-1);
      
        let newCell = newRow.insertCell(0);
      
        let newText = document.createTextNode('New bottom row');
        newCell.appendChild(newText);
 });

// 3. calculating area when length and breadth is given.

const areabtn = document.getElementById("areabtn");
    areabtn.addEventListener("click", function () {
        var num1 = parseInt(document.getElementById("length").value);
        var num2 = parseInt(document.getElementById("breadth").value);
        // areabtn.innerText = num1 * num2;
        document.getElementById("div").innerHTML = "Area is: "+num1*num2;
    });

// 4. From 3 radio button remove remaining two if one is selected
const radiobtn = document.querySelectorAll(".radiobtn");
console.log(radiobtn);
radiobtn[0].addEventListener(("click"),function () {
    if(document.getElementById('cat').checked) {
        document.getElementById('radiobtn2').innerHTML = "";
        document.getElementById('radiobtn3').innerHTML = "";
    }
});

radiobtn[1].addEventListener(("click"),function () {
    if(document.getElementById('dog').checked) {
        document.getElementById('radiobtn1').innerHTML = "";
        document.getElementById('radiobtn3').innerHTML = "";
    }
});

radiobtn[2].addEventListener(("click"),function () {
    if(document.getElementById('horse').checked){
        document.getElementById('radiobtn1').innerHTML = "";
        document.getElementById('radiobtn2').innerHTML = "";
    }
});