
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = timeTime(localStorage.getItem('time'))
slider.value = localStorage.getItem('time')



console.log("weeadwa")
function timeTime(a){
  localStorage.setItem('time', a)
  j =  Math.floor(a / 60 % 60);
  m1 = Math.floor(a % 60 / 10);
  m2 = a % 10;
  a = ("0" + j + ":" + m1 + m2)
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: a}, function(response) {
      console.log(response.farewell);
    });
  });
  console.log(a+"wa")
  return a
}

slider.oninput = function() {
  output.innerHTML = timeTime(this.value);
} 

console.log("wwa51")
