// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
  const welcomeText = document.getElementById('welcome-text');
  welcomeText.textContent = 'You just changed the welcome text dynamically!';
});

// Modify CSS styles via JavaScript
document.getElementById('change-style-btn').addEventListener('click', () => {
  const welcomeText = document.getElementById('welcome-text');
  welcomeText.style.color = 'blue';
  welcomeText.style.fontWeight = 'bold';
});

// Add a new element dynamically
document.getElementById('add-element-btn').addEventListener('click', () => {
  const dynamicContent = document.getElementById('dynamic-content');
  const newElement = document.createElement('div');
  newElement.className = 'added-element';
  newElement.textContent = 'This is a dynamically added element!';
  dynamicContent.appendChild(newElement);
});

// Remove the last added element
document.getElementById('remove-element-btn').addEventListener('click', () => {
  const dynamicContent = document.getElementById('dynamic-content');
  if (dynamicContent.lastChild) {
    dynamicContent.removeChild(dynamicContent.lastChild);
  } else {
    alert('No elements to remove!');
  }
});
