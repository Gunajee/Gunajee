// Get the filter select element
const filterSelect = document.getElementById('filter');

// Get all task elements
const tasks = document.querySelectorAll('.task');

// Add event listener to filter select
filterSelect.addEventListener('change', filterTasks);

// Function to filter tasks based on the selected option
function filterTasks() {
  const selectedOption = filterSelect.value;

  tasks.forEach(task => {
    if (selectedOption === 'all') {
      task.style.display = 'flex';
      task.classList.remove('completed-color');
    } else if (selectedOption === 'completed' && task.classList.contains('completed')) {
      task.style.display = 'flex';
      task.classList.add('completed-color');
    } else if (selectedOption === 'incomplete' && !task.classList.contains('completed')) {
      task.style.display = 'flex';
      task.classList.remove('completed-color');
    } else {
      task.style.display = 'none';
      task.classList.remove('completed-color');
    }
  });
}
