function emailSubmitted() {
  document.getElementById('subscription-thanks').style.display = "block";
}

var prev = document.getElementById('prev');
var next = document.getElementById('next');
var phases = ["one", "two", "three", "four"];
var months= ["January","February","March","April","May","June","July","August","September","October","November","December"];

var phase = 1;
showHidePrevNextButtons();

function showHidePrevNextButtons() {
  if (phase == 1) {
    prev.style.visibility="hidden";
  }
  else {
    prev.style.visibility="visible";
  }
  if (phase > 4) {
    next.style.visibility="hidden";
  }
  else {
    next.style.visibility="visible";
  }
}

document.getElementById("next").addEventListener("click", nextButton);

function nextButton() {
  if (phase == 4) {
    calculateResults();
  }
  else {
    nextPhase();
  }
}

function nextPhase() {
  document.getElementById("phase-" + phase).classList.remove("showPhase");
  phase++;
  document.getElementById("phase-" + phase).classList.add("showPhase");
  document.getElementById('phase-header').innerHTML = "phase " + phases[phase-1];
  showHidePrevNextButtons();
  const mark = document.querySelector(".progress-mark:nth-child(" + phase + ")");
  mark.style.backgroundColor = "#ff5416";
}

document.getElementById("prev").addEventListener("click", prevPhase);

function prevPhase() {
  document.getElementById("phase-" + phase).classList.remove("showPhase");
  const mark = document.querySelector(".progress-mark:nth-child(" + phase + ")");
  mark.style.background = "none";
  phase--;
  document.getElementById("phase-" + phase).classList.add("showPhase");
  document.getElementById('phase-header').innerHTML = "phase " + phases[phase-1];
  showHidePrevNextButtons();
}

function calculateResults() {
  document.getElementById("form").style.display="none";
  document.getElementById("loading").style.display="flex";
  setTimeout( function() { showResults(); }, 110);
}

var errorMessage = document.getElementById("error");
var plan = 1;

function showResults() {
  document.getElementById("loading").style.display="none";
  document.getElementById("tomorrow").style.display="block";
  document.getElementById("results").style.display="flex";
  document.getElementById("plan-1").classList.add("showPlan");
  document.getElementById("quiz-header").innerHTML="Let's Plan Tomorrow";
  document.getElementById("quiz-subheader").innerHTML="JUST FOR YOU";
  const date = new Date();
  let day = date.getDate() + 1;
  let month = date.getMonth();
  let year = date.getFullYear();
  let tmoDate = months[month] + " " + day + ", " + year;
  document.getElementById("tomorrow").innerHTML="Tomorrow is " + tmoDate;
  document.getElementById("5am").addEventListener("click", five);
  document.getElementById("8am").addEventListener("click", eight);
  document.getElementById("12pm").addEventListener("click", noon);
  document.getElementById("breakfast-unhealthy").addEventListener("click", breakfastUnhealthy);
  document.getElementById("breakfast-healthy").addEventListener("click", breakfastHealthy);
  document.getElementById("breakfast-none").addEventListener("click", breakfastNone);
  document.getElementById("work").addEventListener("click", work);
  document.getElementById("gym").addEventListener("click", gym);
  document.getElementById("movies").addEventListener("click", movies);
  var friendName = document.getElementById("friend-name").value;
  if (friendName == "") {
    document.getElementById("friend").style.display="none";
  }
  else {
    document.getElementById("friend").innerHTML=document.getElementById("friend-name").value;
  }
  document.getElementById("parents").addEventListener("click", seeParents);
  document.getElementById("friend").addEventListener("click", seeFriend);
  document.getElementById("noone").addEventListener("click", seeNoOne);
}

  function five() {
    let sleep = document.getElementById("sleep");
    let userAnswer = sleep.options[sleep.selectedIndex].value;
    if (userAnswer == "night") {
      errorMessage.innerHTML="This is too early for you. Try a later time.";
    }
    else {
      nextPlan();
    }
  }

  function eight() {
    nextPlan();
  }

  function noon() {
    let sleep = document.getElementById("sleep");
    let userAnswer = sleep.options[sleep.selectedIndex].value;
    if (userAnswer == "early") {
      errorMessage.innerHTML="This is too late for you. Try an earlier time.";
    }
    else {
      nextPlan();
    }
  }

  function breakfastUnhealthy() {
    let struggle = document.getElementById("struggle");
    let userAnswer = struggle.options[struggle.selectedIndex].value;
    if (userAnswer == "fat") {
      errorMessage.innerHTML="You shouldn't eat this. It will make you feel heavy. ";
    }
    else if (userAnswer == "busy"){
      errorMessage.innerHTML="You aren't the type of person to eat breakfast; you don't have time. Try skipping breakfast instead. ";
    }
    else if (userAnswer == "poor"){
      errorMessage.innerHTML="You aren't the type of person to make this purchase; are you sure you can afford it?";
    }
    else {
      nextPlan();
    }
  }

  function breakfastHealthy() {
    let struggle = document.getElementById("struggle");
    let userAnswer = struggle.options[struggle.selectedIndex].value;
    if (userAnswer == "busy"){
      errorMessage.innerHTML="You aren't the type of person to cook breakfast; you don't have time. Try skipping breakfast instead. ";
    }
    else if (userAnswer == "poor") {
      errorMessage.innerHTML="You aren't the type of person to have these ingredients.";
    }
    else if (userAnswer == "fat") {
      errorMessage.innerHTML="Are you sure you want to have breakfast?";
    }
    else {
      nextPlan();
    }
  }

  function breakfastNone() {
    let struggle = document.getElementById("struggle");
    let userAnswer = struggle.options[struggle.selectedIndex].value;
    if (userAnswer == "depressed"){
      errorMessage.innerHTML="You aren't the type of person to skip breakfast. Some donuts might help you feel better.";
    }
    else if (userAnswer == "lonely"){
      errorMessage.innerHTML="You may be avoiding breakfast because you have no one to eat with.";
    }
    else {
      nextPlan();
    }
  }

  function work() {
    let struggle = document.getElementById("struggle");
    let userAnswer = struggle.options[struggle.selectedIndex].value;
    if (userAnswer == "fat") {
      errorMessage.innerHTML="Perhaps you should to go to the gym.";
    }
    else if (userAnswer == "depressed"){
      errorMessage.innerHTML="It's okay to skip work every once in a while. You have no motivation anyways.";
    }
    else {
      nextPlan();
    }
  }

  function gym() {
    let struggle = document.getElementById("struggle");
    let userAnswer = struggle.options[struggle.selectedIndex].value;
    if (userAnswer == "depressed"){
      errorMessage.innerHTML="You're not the type of person who goes to the gym; you lack motivation. Why don't you go to the movies instead? ";
    }
    else if (userAnswer == "poor") {
      errorMessage.innerHTML="Are you sure you can afford to have a gym membership?";
    }
    else if (userAnswer == "busy"){
      errorMessage.innerHTML="You don't have time to go to the gym.";
    }
    else if (userAnswer == "lonely"){
      errorMessage.innerHTML="You find it hard to work out alone but you don't have anyone to go with. Maybe next time.";
    }
    else {
      nextPlan();
    }
  }

  function movies() {
    let struggle = document.getElementById("struggle");
    let userAnswer = struggle.options[struggle.selectedIndex].value;
    if (userAnswer == "busy"){
      errorMessage.innerHTML="You don't have time to go to the gym.";
    }
    else if (userAnswer == "poor") {
      errorMessage.innerHTML="Are you sure you can afford to go to the movies?";
    }
    else if (userAnswer == "fat") {
      errorMessage.innerHTML="Perhaps you should to go to the gym. It's been a while.";
    }
    else if (userAnswer == "lonely") {
      errorMessage.innerHTML="Going to the movies is usually less helpful than going to work in distracting yourself from your problems.";
    }
    else {
      nextPlan();
    }
  }

  function seeParents() {
    let relation = document.getElementById("parents-relationship");
    let relationship = relation.options[relation.selectedIndex].value;
    let struggle = document.getElementById("struggle");
    let userAnswer = struggle.options[struggle.selectedIndex].value;
    let status = document.getElementById("relationship-status");
    let statusAnswer = status.options[status.selectedIndex].value;
    if (statusAnswer == "single" && userAnswer == "lonely") {
        nextPlan();
    }
    else if (relationship == "no") {
      errorMessage.innerHTML="What parents?";
    }
    else if (relationship == "n" || userAnswer == "r") {
      errorMessage.innerHTML="This might cause more distress. We suggest seeing someone else or no one at all.";
    }
    else if (relationship == "s") {
      errorMessage.innerHTML="Do you want to risk the potential of a fight?";
    }
    else {
      nextPlan();
    }
  }

  function seeFriend() {
    let struggle = document.getElementById("struggle");
    let userAnswer = struggle.options[struggle.selectedIndex].value;
    let status = document.getElementById("relationship-status");
    let statusAnswer = status.options[status.selectedIndex].value;
    if (statusAnswer == "single" && userAnswer!= "lonely") {
      nextPlan();
    }
    else if (statusAnswer == "single" && userAnswer == "lonely") {
      errorMessage.innerHTML="Are you sure you can trust " + document.getElementById("friend-name").value + "as a friend? You're not the type of person who trusts easily.";
    }
    else {
      nextPlan();
    }
  }

  function seeNoOne() {
    let status = document.getElementById("relationship-status");
    let userAnswer = status.options[status.selectedIndex].value;
    if (document.getElementById("friend-name").value == "") {
      nextPlan();
    }
    else if (userAnswer == "single") {
      errorMessage.innerHTML="This is why you're single.";
    }
    else {
      nextPlan();
    }
  }

function nextPlan() {
  errorMessage.innerHTML="";
  if (plan == 4) {
    endPage();
    return;
  }
  document.getElementById("plan-" + plan).classList.remove("showPlan");
  plan++;
  document.getElementById("plan-" + plan).classList.add("showPlan");
}

function endPage() {
  document.getElementById("results").style.display="none";
  document.getElementById("tomorrow").style.display="none";
  document.getElementById("fullPlan").classList.add("show");
}
