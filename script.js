var projects = [];
var tasks = [];

function createProject() {
  var projectName = prompt("Nom du projet :");
  if (projectName) {
    var project = { name: projectName };
    projects.push(project);
    displayProjects();
  }
}

function displayProjects() {
  var projectList = document.getElementById("project-list");
  projectList.innerHTML = "";
  projects.forEach(function(project) {
    var li = document.createElement("li");
    li.innerText = project.name;
    projectList.appendChild(li);
  });
}

function createTask() {
  var taskName = prompt("Nom de la tâche :");
  if (taskName) {
    var task = { name: taskName };
    tasks.push(task);
    displayTasks();
  }
}

function displayTasks() {
  var taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  tasks.forEach(function(task) {
    var li = document.createElement("li");
    li.innerText = task.name;
    taskList.appendChild(li);
  });
}

displayProjects();
displayTasks();