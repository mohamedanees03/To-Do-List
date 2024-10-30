// Selecting the necessary elements
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Event listener for the 'Add' button
addBtn.addEventListener("click", addTodo);

// Add to-do function
function addTodo() {
    const task = input.value.trim();
    if (task === "") return;

    const todoItem = document.createElement("li");
    todoItem.className = "todo-item";
    todoItem.innerHTML = `
        <span>${task}</span>
        <div>
            <button class="complete-btn">✔️</button>
            <button class="delete-btn">❌</button>
        </div>
    `;

    todoList.appendChild(todoItem);

    input.value = "";

    // Complete button functionality
    todoItem.querySelector(".complete-btn").addEventListener("click", () => {
        todoItem.classList.toggle("completed");
    });

    // Delete button functionality
    todoItem.querySelector(".delete-btn").addEventListener("click", () => {
        todoList.removeChild(todoItem);
    });
}
