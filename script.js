
let listLenght = 0;
var ul = document.querySelector('.todoTasks');
var li;
//on click of add task button
document.querySelector('.addTaskButton').onclick = (function (event) {
  event.preventDefault();
  listLenght++;
  if (document.querySelector('input.form-control').value == '') {
    document.querySelector('.error-msg').style.display = 'block';
  }
  else {
    var listContainer = document.createElement('div');
    listContainer.className = 'checklist';
    var input = document.querySelector('input.form-control');
    var item = input.value;
    var textNode = document.createTextNode(item);
    li = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', 'check');

    let label = document.createElement('label');
    li.appendChild(listContainer);
    listContainer.appendChild(checkbox);
    label.appendChild(textNode);
    listContainer.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);
    setTimeout(() => {
      li.className = 'list-group-item m-2 d-flex justify-content-between align-items-center'
    }, 5);

    var del = document.createElement('button');
    del.className = 'deleteTasks';
    del.innerHTML += `<i class='fa-solid fa-trash'></i>`;
    li.appendChild(del);
  }

  //reset input field
  document.querySelector('input.form-control').value = '';

  //delete tasks
  var taskName = document.querySelectorAll('.deleteTasks');
  for (var i = 0; i < taskName.length; i++) {
    taskName[i].onclick = function () {
      this.parentNode.remove();
    }
  }
});
//on focus - input field
document.querySelector('input.form-control').onfocus = (function () {
  document.querySelector('.error-msg').style.display = 'none';
});
