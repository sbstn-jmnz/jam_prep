const Survey = {
  init(){
    var modal = new bootstrap.Modal(document.querySelector('.modal'))
    setTimeout(()=>{
      modal.show()
    }, 1000)
  }
}

document.addEventListener('DOMContentLoaded',() => Survey.init())