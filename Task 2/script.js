document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task-input");
  const prioritySelect = document.getElementById("priority-select");
  const deadlineInput = document.getElementById("deadline-input");
  const labelInput = document.getElementById("label-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const tasksList = document.getElementById("tasks");

  addTaskBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const task = taskInput.value.trim();
    const priority = prioritySelect.value;
    const deadline = deadlineInput.value;
    const label = labelInput.value.trim();

    if (task !== "") {
      const taskItem = document.createElement("li");
      taskItem.classList.add("task-item");

      const taskInfo = document.createElement("div");
      taskInfo.classList.add("task-info");
      taskInfo.innerHTML = `
        <span>${task}</span>
        <span>Priority: <strong class="${priority}-priority">${priority}</strong></span>
        <span>Deadline: ${deadline}</span>
        <span>Label: <span class="label label-${label.toLowerCase()}">${label}</span></span>
      `;

      const taskActions = document.createElement("div");
      taskActions.classList.add("task-actions");
      taskActions.innerHTML = `
        <button class="complete-task-btn">Complete</button>
        <button class="delete-task-btn">Delete</button>
      `;

      taskItem.appendChild(taskInfo);
      taskItem.appendChild(taskActions);
      tasksList.appendChild(taskItem);

      taskInput.value = "";
      prioritySelect.value = "low";
      deadlineInput.value = "";
      labelInput.value = "";
    }
  });

  tasksList.addEventListener("click", function (e) {
    if (e.target.classList.contains("complete-task-btn")) {
      const taskItem = e.target.closest(".task-item");
      taskItem.classList.toggle("completed");

      // Add or remove a strike-through style
      const taskInfo = taskItem.querySelector(".task-info");
      taskInfo.style.textDecoration = taskItem.classList.contains("completed")
        ? "line-through"
        : "none";
    } else if (e.target.classList.contains("delete-task-btn")) {
      const taskItem = e.target.closest(".task-item");
      tasksList.removeChild(taskItem);
    }
  });
});
