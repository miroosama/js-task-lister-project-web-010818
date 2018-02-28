/*
list is responsible for creating a single list component
*/
const List = (() => {

  return class List {
    constructor(title) {
      this.title = this.title.bind(this)
    }

    // function(event){
    //   event.preventDefault();
    //   let list = event.target.children[1].value
    //
    // })

    function addListOption(listTitle){
      let option = document.createElement('option')
      option.setAttribute("value", listTitle)
      option.innerText = listTitle
      selectList.appendChild(option)

      // this.post(listTitle)
    }

    function addListTask(json){
      let listTitle = json.title
      console.log(listTitle)

      let parentlist = document.querySelector("#lists")
      let listTask = document.createElement('div')
      let h2 = document.createElement('h2')
      let ul = document.createElement('ul')
      let deleteButt = document.createElement('button')

      listTask.setAttribute("id", listTitle)

      deleteButt.setAttribute("data-id","2")
      deleteButt.setAttribute("class", "delete-list")
      deleteButt.innerText = "X"

      h2.innerText = listTitle;
      h2.appendChild(deleteButt)

      listTask.setAttribute("class", "list")
      listTask.appendChild(h2)

      parentlist.appendChild(listTask)
      parentlist.appendChild(ul)
    }



    function post(data){
      let options = {
        method: "POST"
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({title: title})
      };

      fetch('https://flatiron-tasklistr.herokuapp.com/lists' options)
        .then(res=>res.json())
        .then(json=>addListTask(json))
    }



  }

})()
