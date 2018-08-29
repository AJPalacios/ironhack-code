var input = document.getElementById('input')
var button = document.getElementById('button')

button.addEventListener('click', ev => {

  var task = document.createElement('li');
  var list = document.getElementById('list')
  var new_task = input.value
  var texto = document.createTextNode(new_task)
  task.appendChild(texto)
  list.appendChild(task)
  input.value = '';

  list.addEventListener('click', (ev)=>{
    list.removeChild(ev.target);
  })

})