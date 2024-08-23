// Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

// Declaramos variables
var side__menu = document.getElementById("menu__side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

// Evento para mostrar y ocultar menú
function open_close_menu() {
    body.classList.toggle("body_move");
    side__menu.classList.toggle("menu_side_move");
}

// Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página
if (window.innerWidth < 760) {
    body.classList.add("body_move");
    side__menu.classList.add("menu_side_move");
}

// Haciendo el menú responsive
window.addEventListener("resize", function () {
    if (window.innerWidth > 760) {
        body.classList.remove("body_move");
        side__menu.classList.remove("menu_side_move");
    } else {
        body.classList.add("body_move");
        side__menu.classList.add("menu_side_move");
    }
});

document.getElementById('addCategoryBtn').addEventListener('click', addCategory);
document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('categoryMenu').addEventListener('click', filterTasksByCategory);

function addCategory() {
    const categoryInput = document.getElementById('categoryInput');
    const category = categoryInput.value.trim();

    if (category === '') return;

    const categorySelect = document.getElementById('categorySelect');
    const categoryMenu = document.getElementById('categoryMenu');
    
    // Evitar duplicados en el selector y el menú lateral
    if (!Array.from(categorySelect.options).some(option => option.value === category)) {
        const newOption = document.createElement('option');
        newOption.value = category;
        newOption.textContent = category;
        categorySelect.appendChild(newOption);

        const newCategoryItem = document.createElement('li');
        newCategoryItem.textContent = category;
        newCategoryItem.dataset.category = category;

        const deleteCategoryBtn = document.createElement('button');
        deleteCategoryBtn.className = 'deleteCategoryBtn';
        deleteCategoryBtn.innerHTML = "<i class='bx bxs-trash'></i>"; // Icono de eliminación
        deleteCategoryBtn.addEventListener('click', (event) => {
            event.stopPropagation(); // Evita que el clic se propague y active el filtro
            deleteCategory(category);
        });

        newCategoryItem.appendChild(deleteCategoryBtn);
        newCategoryItem.addEventListener('click', filterTasksByCategory);
        categoryMenu.appendChild(newCategoryItem);
    }

    categoryInput.value = '';
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    const category = document.getElementById('categorySelect').value;

    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');

    const taskCategory = document.createElement('span');
    taskCategory.className = 'taskCategory';
    taskCategory.textContent = ` (${category})`;

    const taskCheck = document.createElement('input');
    taskCheck.type = 'checkbox';
    taskCheck.addEventListener('change', toggleTask);

    const taskTextSpan = document.createElement('span');
    taskTextSpan.className = 'taskText';
    taskTextSpan.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.innerHTML = "<i class='bx bxs-trash'></i>"; // Icono de eliminación
    deleteBtn.addEventListener('click', () => {
        newTask.remove();
        checkAndRemoveCategory(category);
    });

    newTask.appendChild(taskCheck);
    newTask.appendChild(taskTextSpan);
    newTask.appendChild(taskCategory);
    newTask.appendChild(deleteBtn);
    newTask.dataset.category = category;

    taskList.appendChild(newTask);
    taskInput.value = '';
}

function toggleTask() {
    const taskItem = this.parentElement;
    const completedList = document.getElementById('completedTaskList');
    const taskList = document.getElementById('taskList');

    if (this.checked) {
        taskItem.classList.add('completed');
        completedList.appendChild(taskItem);
    } else {
        taskItem.classList.remove('completed');
        taskList.appendChild(taskItem);
    }
}

function filterTasksByCategory(event) {
    const category = event.target.dataset.category;
    const allTasks = document.querySelectorAll('#taskList li, #completedTaskList li');

    allTasks.forEach(task => {
        if (category === 'all' || task.dataset.category === category) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
}

function checkAndRemoveCategory(category) {
    const taskList = document.querySelectorAll(`#taskList li[data-category="${category}"], #completedTaskList li[data-category="${category}"]`);
    
    // Si no hay tareas en esa categoría, eliminar la categoría del menú y del selector
    if (taskList.length === 0) {
        const categorySelect = document.getElementById('categorySelect');
        const categoryMenu = document.getElementById('categoryMenu');
        
        Array.from(categorySelect.options).forEach(option => {
            if (option.value === category) {
                option.remove();
            }
        });

        const categoryItems = Array.from(categoryMenu.children);
        categoryItems.forEach(item => {
            if (item.dataset.category === category) {
                item.remove();
            }
        });
    }
}

function deleteCategory(category) {
    const categorySelect = document.getElementById('categorySelect');
    const categoryMenu = document.getElementById('categoryMenu');
    
    // Eliminar la categoría del selector
    Array.from(categorySelect.options).forEach(option => {
        if (option.value === category) {
            option.remove();
        }
    });

    // Eliminar la categoría del menú lateral
    Array.from(categoryMenu.children).forEach(item => {
        if (item.dataset.category === category) {
            item.remove();
        }
    });

    // Eliminar todas las tareas de la categoría seleccionada
    const taskList = document.querySelectorAll(`#taskList li[data-category="${category}"], #completedTaskList li[data-category="${category}"]`);
    taskList.forEach(task => task.remove());
}

