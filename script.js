// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  let isValid = true;

  if (name === "") {
    formMessage.textContent = "Name is required.";
    isValid = false;
  } else if (!/^[a-zA-Z ]+$/.test(name)) {
    formMessage.textContent = "Name can only contain letters and spaces.";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    isValid = false;
  } else if (message === "") {
    formMessage.textContent = "Message is required.";
    isValid = false;
  }

  if (isValid) {
    formMessage.textContent = "Thank you for reaching out. We'll get back to you soon.";
    formMessage.style.color = "green";
    this.reset();
  }
});

// To-Do List Functionality
document.getElementById('addTaskButton').addEventListener('click', function () {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== "") {
    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', function () {
      taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
});
