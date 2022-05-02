// Define UI Vars
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-tasks');







loadEventListeners();


function loadEventListeners(){
  document.addEventListener('DOMContentLoaded',getTask)
 form.addEventListener("submit",addtask);
 taskList.addEventListener("click",del);
 clearBtn.addEventListener("click",cBtn);
 filter.addEventListener("keyup",filt);
}

function getTask(){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks = [];

  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
      tasks.forEach(function (tasks){
         const li = document.createElement("li");

          li.className ="list-group-item d-flex align-items-center";
 
          li.appendChild(document.createTextNode(tasks));
  
          var i = document.createElement("i");
          i.className="fas fa-times text-danger mr-auto delete-item";
          li.appendChild(i);
 
        taskList.appendChild(li);
 
})
}

function addtask(e){
if(taskInput.value === ''){
  alert("pleas first type someting");
e.preventDefault();

}else{
 
  const li = document.createElement("li");
  li.className ="list-group-item d-flex align-items-center";
 
  li.appendChild(document.createTextNode(taskInput.value));
  
  var i = document.createElement("i");
  i.className="fas fa-times text-danger mr-auto delete-item";
  li.appendChild(i);
 
  document.querySelector(".list-group").appendChild(li);
  
storeTaskILocalStorage(taskInput.value);
e.preventDefault();
taskInput.value ='';

}}

function storeTaskILocalStorage(task){
// console.log(task);
let tasks;
if(localStorage.getItem('tasks')===null){
  tasks= [];

}else{
  tasks = JSON.parse(localStorage.getItem('tasks'));
    // tasks = JSON.parse(localStorage.getItem('tasks'));

}
tasks.push(task);
localStorage.setItem('tasks',JSON.stringify(tasks))
}


function del(e){
if(e.target.classList.contains("delete-item")){
  if(confirm("are you sure?")){
    e.target.parentElement.remove();
    removeTaskFromLocalStorage(e.target.parentElement);
  }
}
}

function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks= [];
  
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
      // tasks = JSON.parse(localStorage.getItem('tasks'));
  
  }
  tasks.forEach(function (task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks',JSON.stringify(tasks));
}
// function removeTaskFromLocalStorage(taskItem) {
//   let tasks;
//   if (localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.forEach(function (task, index) {
//     if (taskItem.textContent === task) {
//       tasks.splice(index, 1);
//     }
//   });

//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

function cBtn(){
taskList.innerHTML='';
clearlocalstorage();
}
function clearlocalstorage(){
  localStorage.clear();
}

function filt(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.list-group-item').forEach(function (task){
    const item = task.textContent;
   
    if(item.toLocaleLowerCase().indexOf(text) != -1){
      task.classList.add("d-flex");
   
    }else{
      task.classList.remove("d-flex");
      task.style.display='none';
      
    }
  })
};





// function filt(e){
//   const text = e.target.value.toLowerCase();

//   console.log(text);
//   console.log(task);

//   document.querySelectorAll('.list-group-item').forEach(function (task){
    
//     const item = task.textContent;

//     console.log(task);

//     if(item.toLocaleLowerCase().indexOf(text) != -1){
//       task.classList.add("d-flex");
//     } 
    
//     else{
//       task.classList.remove("d-flex");
//       task.style.display = 'none';
//     }
//   });
// }






// Load all event listeners
// loadEventListeners();

// // Load all event listeners
// function loadEventListeners() {
 
//   // DOM Load event
//   document.addEventListener('DOMContentLoaded', getTasks);

//   // Add task event
//   form.addEventListener('submit', addTask);

//   // Remove task event
//   taskList.addEventListener('click', removeTask);

//   // Clear task
//   clearBtn.addEventListener('click', clearTask);

//   // Filter task
//   filter.addEventListener('keyup', filterTask);

// }

// // Get Tasks from LS
// function getTasks() {
//   let tasks;
//   if (localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.forEach(function (task) {

//     // Create li element
//     const li = document.createElement('li');
//     // Add class
//     li.className = 'list-group-item d-flex align-items-center';
//     // Create text node and append to li
//     li.appendChild(document.createTextNode(task));
//     // Create i element
//     const i = document.createElement('i');
//     // Add class
//     i.className = 'fas fa-times text-danger mr-auto delete-item';
//     // Append the i to li
//     li.appendChild(i);

//     // Append li to ul
//     taskList.appendChild(li);

//   });
// }

// Add task
// function addTask(e) {
//   if (taskInput.value === '') {
//     alert('برای افزودن تسک در ابتدا تسک را وارد کنید');
//   } else {
//     // Create li element
//     const li = document.createElement('li');
//     // Add class
//     li.className = 'list-group-item d-flex align-items-center';
//     // Create text node and append to li
//     li.appendChild(document.createTextNode(taskInput.value));
//     // Create i element
//     const i = document.createElement('i');
//     // Add class
//     i.className = 'fas fa-times text-danger mr-auto delete-item';
//     // Append the i to li
//     li.appendChild(i);

//     // Append li to ul
//     taskList.appendChild(li);

//     // Store in LS
//     storeTaskInLocalStorage(taskInput.value);

//     // Clear input
//     taskInput.value = '';

//     e.preventDefault();

//   }

// }

// // Store Task
// function storeTaskInLocalStorage(task) {
//   // console.log(task);

//   let tasks;
//   if (localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.push(task);

//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// // Remove task
// function removeTask(e) {

//   if (e.target.classList.contains('delete-item')) {
//     if (confirm('آيا مطمن هستی برای حذف تسک')) {
//       e.target.parentElement.remove();
//       // Remove from LS
//       removeTaskFromLocalStorage(e.target.parentElement);
//     }
//   }

// }

// //  Remove from LS
// function removeTaskFromLocalStorage(taskItem) {
//   let tasks;
//   if (localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.forEach(function (task, index) {
//     if (taskItem.textContent === task) {
//       tasks.splice(index, 1);
//     }
//   });

//   localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// // Clear task
// function clearTask() {
//   taskList.innerHTML = '';
//   // Clear from LS
//   clearTasksFromLocalStorage();
// }


// // Clear Tasks from LS
// function clearTasksFromLocalStorage() {
//   localStorage.clear();
// }

// // Filter task
// function filterTask(e) {
//   const text = e.target.value.toLowerCase();
//   // console.log(text);

//   document.querySelectorAll('.list-group-item').forEach(function (task) {
//     // console.log(task);
//     const item = task.textContent;
//     // console.log(item);

//     if (item.toLowerCase().indexOf(text) != -1) {
//       task.classList.add("d-flex");
//     } else {
//       task.classList.remove("d-flex");
//       task.style.display = 'none';
//     }

//   });

// }























