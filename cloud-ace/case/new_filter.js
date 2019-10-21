/*
loop through all cards
check the tags in each card
if the tags match, append 'show' to card class, remove otherwise
after 1, 2 (or maybe more) filtering show all cards (those which contains the 'show' class)
*/

/*
things to note:
string comparison
event.preventDefault();
single tag -> multiple tags
*/

var serviceList = document.getElementById("js-service").options;
var industryList = document.getElementById("js-industry").options;
var cardList = document.getElementsByClassName("cards");

function getTags(card) {
  return card.querySelectorAll('.tags > li');
}

function getServiceTags(card) {
  //this should return list instead of single string
  var tags = getTags(card);
  var serviceTags = [];
  for (var j = 0; j < tags.length; j++) {
    if (tags[j].className.localeCompare('service') == 0) {
      serviceTags.push(tags[j].innerText);
    }
  }
  return serviceTags;
}

function getIndustryTags(card) {
  //this should also return list instead of single string
  var tags = getTags(card);
  var industryTags = [];
  for (var j = 0; j < tags.length; j++) {
    if (tags[j].className.localeCompare('industry') == 0) {
      industryTags.push(tags[j].innerText);
    }
  }
  return industryTags;
}

function addCard(index) {
  if (!cardList[index].classList.contains('show')) {
    cardList[index].classList.add('show');
  }
  //event.preventDefault();
}

function removeCard(index) {
  if (cardList[index].classList.contains('show')) {
    cardList[index].classList.remove('show');
  }
  //event.preventDefault();
}

function filter(selectedService = "", selectedIndustry = "") {
  //loop through all cards
  for (var i = 0; i < cardList.length; i++) {
    var serviceTags = getServiceTags(cardList[i]);
    console.log('service: ', serviceTags);

    var industryTags = getIndustryTags(cardList[i]);
    console.log('industry: ', industryTags);

    //add the card if it has the selected tags
    if ((selectedService == "" || serviceTags.includes(selectedService)) && (selectedIndustry == "" || industryTags.includes(selectedIndustry))) {
      addCard(i);
    } else {
      removeCard(i);
    }
  }
  //event.preventDefault();
}

// When submit is clicked
function buttonSubmit() {
  console.log('submitted!');

  //show the box, for loop through the "js-service" list
  var selectedService = "", selectedIndustry = "";
  //careful, loop from index 1 because 0-th is the default
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
  filter(selectedService, selectedIndustry);
  console.log("DEBUG --", selectedService, selectedIndustry, "-- DEBUG");

  event.preventDefault();
}

function reset() {
  filter();
}

const form = document.getElementById('js-form');
form.addEventListener('submit', buttonSubmit);

reset();
