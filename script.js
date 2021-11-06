let timer = document.getElementsByTagName('timer')
let timeTimer = localStorage.getItem("haha")
let tegId = ".btn-primary"
console.log("wwa21")
chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {     
            localStorage.setItem("haha", request.greeting)
    }
  )

  function comparison() {
    if(timer.item(0).textContent.replace(/\s/g, '') == localStorage.getItem("haha")){
      document.querySelector(".btn-primary").click()
    }
}
let trigger = setInterval(comparison, 1000)
console.log(timeTimer)