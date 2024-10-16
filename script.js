function downloadData() {
  event.preventDefault() ;
var startdate = document.getElementById('startdate").value;
var end date = document.getElementById('startdate").value;
console.log(startdate);
console.log("Ending date: " + enddate);
  fetch("https://compute.samford.edu/zohauth/clients/data");
}
