/*
function logSubmit(event) {
  log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;


}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);
*/

var serviceList = document.getElementById("js-service").options;

console.log(serviceList);

var serviceTag = document.getElementsByClassName("service");

console.log("haha");
console.log(serviceTag.length);
console.log(serviceTag[0].innerText);
console.log(serviceTag[0].parentNode.parentNode.parentNode.parentNode);

var industryList = document.getElementById("js-industry").options;

console.log(industryList);

var industryTag = document.getElementsByClassName("industry");

console.log("haha");
console.log(industryTag.length);
console.log(industryTag[0].innerText);
console.log(industryTag[0].parentNode.parentNode.parentNode.parentNode);

///////////
function myFunction() {
  console.log("hihi");
  event.preventDefault();
}
////////////

//append " show" to class name
function addClass(category, index) {
  if (category.localeCompare('service') == 0) {
    console.log(serviceTag[index].parentNode.parentNode.parentNode.parentNode.classList);
    if (!serviceTag[index].parentNode.parentNode.parentNode.parentNode.classList.contains("show")) {
      serviceTag[index].parentNode.parentNode.parentNode.parentNode.classList.add("show");
    }
    console.log(serviceTag[index].parentNode.parentNode.parentNode.parentNode.classList);
  } else {
    console.log(industryTag[index].parentNode.parentNode.parentNode.parentNode.classList);
    if (!industryTag[index].parentNode.parentNode.parentNode.parentNode.classList.contains("show")) {
      industryTag[index].parentNode.parentNode.parentNode.parentNode.classList.add("show");
    }
    console.log(industryTag[index].parentNode.parentNode.parentNode.parentNode.classList);
  }
}

//remove " show" to class name
function removeClass(category, index) {
  if (category.localeCompare('service') == 0) {
    console.log(serviceTag[index].parentNode.parentNode.parentNode.parentNode.classList);
    if (serviceTag[index].parentNode.parentNode.parentNode.parentNode.classList.contains("show")) {
      serviceTag[index].parentNode.parentNode.parentNode.parentNode.classList.remove("show");
    }
    console.log(serviceTag[index].parentNode.parentNode.parentNode.parentNode.classList);
  } else {
    console.log(industryTag[index].parentNode.parentNode.parentNode.parentNode.classList);
    if (industryTag[index].parentNode.parentNode.parentNode.parentNode.classList.contains("show")) {
      industryTag[index].parentNode.parentNode.parentNode.parentNode.classList.remove("show");
    }
    console.log(industryTag[index].parentNode.parentNode.parentNode.parentNode.classList);
  }
}

//
function showCards(selectedService, selectedIndustry) {
  /*
  for (var i = 0; i < serviceTag.length; i++) {
    if (selectedService.localeCompare(serviceTag[i].innerText) == 0 || selectedService == "") { //same text as selected option, show
      //console.log("good", i);
      addClass('service', i);
    }
  }
  for (var i = 0; i < industryTag.length; i++) {
    if (selectedIndustry.localeCompare(industryTag[i].innerText) == 0 || selectedIndustry == "") { //same text as selected option, show
      //console.log("good", i);
      addClass('industry', i);
    }
  }
  for (var i = 0; i < serviceTag.length; i++) {
    if (selectedService.localeCompare(serviceTag[i].innerText) != 0 && selectedService != "") { //different text with selected option, hide
      //console.log("bad", i);
      removeClass('service', i);
    }
  }
  for (var i = 0; i < industryTag.length; i++) {
    if (selectedIndustry.localeCompare(industryTag[i].innerText) != 0 && selectedIndustry != "") { //different text with selected option, hide
      //console.log("bad", i);
      removeClass('industry', i);
    }
  }
  */
  for (var i = 0; i < serviceTag.length; i++) {
    for (var j = 0; j < industryTag.length; j++) {
      if (selectedService.localeCompare(serviceTag[i])) {

      } else {

      }industryTag[j]
    }
  }
}

// When submit is clicked
function buttonSubmit() {
  console.log('submitted!');

  //show the box, for loop through the "js-service" list
  if (serviceList[0].selected && industryList[0].selected) { //show all
    showAll();
  } else {
    var selectedService = "", selectedIndustry = "";
    for (var i = 1; i < serviceList.length; i++) {
      if (serviceList[i].selected) {
        selectedService = serviceList[i].text;
      }
    }
    for (var i = 1; i < industryList.length; i++) {
      if (industryList[i].selected) {
        selectedIndustry = industryList[i].text;
      }
    }
    showCards(selectedService, selectedIndustry);
    console.log("HAHAHA", selectedService, selectedIndustry, "XXX");
  }
  event.preventDefault();
}

//simply show all cards in the beginning
function showAll() {
  for (var i = 0; i < serviceTag.length; i++) {
    addClass('service', i);
  }
  for (var i = 0; i < industryTag.length; i++) {
    addClass('industry', i);
  }
}

const form = document.getElementById('js-form');
form.addEventListener('submit', buttonSubmit);

showAll();

/*
console.log(serviceList[0].value);
console.log(serviceList[0].text);
console.log(serviceList[0].selected);

console.log(serviceList[1].value);
console.log(serviceList[1].text);
console.log(serviceList[1].selected);
*/
