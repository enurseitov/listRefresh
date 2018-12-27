console.info("Start");
const checkInterval = 3*1000

function timerFunc() {
  console.info("timer")
  var btn = document.getElementsByClassName("sc-jwKygS bPNJDy");
  if (btn.length > 0) {
    console.error("Update button detected")  
    console.error(btn[0])
    btn[0].click()
  }

}

setInterval(timerFunc,checkInterval);
//test
