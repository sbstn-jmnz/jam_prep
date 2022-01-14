const Counter = {
  init(){
    const counter = document.getElementById('landing-counter')
    let initialValue = 5
    counter.innerText = initialValue

    const interval = setInterval(() => {
      initialValue -= 1
      counter.innerText = initialValue

      if(initialValue === 0){
        clearInterval(interval)
      }
    }, 1000);
  }  
}

document.addEventListener("DOMContentLoaded", () => Counter.init())
