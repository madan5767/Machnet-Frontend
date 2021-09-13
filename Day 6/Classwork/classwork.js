document.getElementById("fname").addEventListener("keyup", myFunction);
        
        function myFunction() {
          var x = document.getElementById("fname");
          x.value = x.value.toUpperCase();
          x.style.color = "red";
          console.log(x);
        }