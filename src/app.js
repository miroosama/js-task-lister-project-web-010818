


const List = (() => {

  return class App{


  constructor(){
    this.listForm = document.getElementById("create-list-form")
    this.selectList = document.getElementById("parent-list")
    this.taskForm = document.getElementById("create-task-form")
  }

  function addEventListeners(){

    this.listForm.addEventListener("submit", function(event){
      let listTitle = event.target.children[1].value
      let list = new List(listTitle)

      list.addListOption(list)
      list.addListTask(list)
    })

    this.taskForm.addEventListener("submit", function(event){
      event.preventDefault();

      let listTitle = event.target.children[1].value
      let description = event.target.children[3].value
      let priority = event.target.children[5].value
      let task = new Task(description, priority)

      updateTask(list, description, priority)
    })

  }





}
}


// const listForm = document.getElementById("create-list-form")
// const selectList = document.getElementById("parent-list")
// const taskForm = document.getElementById("create-task-form")

// function addListOption(listTitle){
//   let option = document.createElement('option')
//   option.setAttribute("value", listTitle)
//   option.innerText = listTitle
//   selectList.appendChild(option)
// }
//
// listForm.addEventListener("submit", function(event){
//   event.preventDefault();
//
//   let list = event.target.children[1].value
//
//   addListOption(list)
//   addListTask(list)
// })







  // function updateTask(list, description, priority){
  //   console.log(list)
  //   let task = document.getElementById(list)
  //   console.log(task)
  //
  //   let li = document.createElement('li')
  //   let br = document.createElement('br')
  //
  //   li.innerHTML = `Task: ${description} <br> Priority: ${priority}`
  //
  //   task.appendChild(li)
  //
  //
  // }
