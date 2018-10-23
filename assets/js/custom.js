var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("lds-circle").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}