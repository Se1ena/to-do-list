var taskForm=document.querySelector("form"),tasksList=document.querySelector("#tasks");function onSaveTask(t){t.preventDefault();var e=t.target[0].value,a='<li class="item">'.concat(e,'<button type="button" data-action="remove" data-id="">Remove</button></li>');tasksList.insertAdjacentHTML("beforeend",a)}function onDeleteTask(t){"remove"===t.target.dataset.action&&t.target.closest(".item").remove()}taskForm.addEventListener("submit",onSaveTask),tasksList.addEventListener("click",onDeleteTask);
//# sourceMappingURL=index.3142005e.js.map
