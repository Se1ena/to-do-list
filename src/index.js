const taskForm = document.querySelector("form");
const tasksList = document.querySelector("#tasks");

taskForm.addEventListener('submit', onSaveTask);
tasksList.addEventListener('click', onDeleteTask);

function onSaveTask(event) {
  event.preventDefault();

  //console.dir(event.target);

  const inputRefValue = event.target[0].value;

  const listItem = `<li class="item">${inputRefValue}<button type="button" data-action="remove" data-id="">Remove</button></li>`;
  tasksList.insertAdjacentHTML('beforeend', listItem);
}

function onDeleteTask(event){
    //console.dir(event.target);
    //console.log(event.target);

    if(event.target.dataset.action === 'remove'){
        event.target.closest('.item').remove()
    }
}
