const form = document.getElementById('defineform');

form.style.position = 'absolute';
form.style.zIndex = '1000';

// Initial position and speed
let currentX = 1080;
let currentY = 0;
let targetX = 1080;
let targetY = 0;
const speed = 0.099; // Adjust this value for speed of movement

function moveFormAwayFromCursor(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Get the form's bounding rectangle
  const formRect = form.getBoundingClientRect();

  // Calculate the center of the form
  const formCenterX = formRect.left + formRect.width / 2;
  const formCenterY = formRect.top + formRect.height / 2;

  // Calculate the direction vector to move the form away from the cursor
  const deltaX = mouseX - formCenterX;
  const deltaY = mouseY - formCenterY;

  // Set the target position based on the cursor's position
  targetX = mouseX - (formRect.width / 2) - (deltaX * 2);
  targetY = mouseY - (formRect.height / 2) - (deltaY * 2);

  // Ensure the form stays within the viewport
  targetX = Math.max(0, Math.min(window.innerWidth - formRect.width, targetX));
  targetY = Math.max(0, Math.min(window.innerHeight - formRect.height, targetY));
}

function updatePosition() {
  // Smoothly move towards the target position
  currentX += (targetX - currentX) * speed;
  currentY += (targetY - currentY) * speed;

  // Apply the new position
  form.style.left = `${Math.round(currentX)}px`;
  form.style.top = `${Math.round(currentY)}px`;

  // Continue the animation loop
  requestAnimationFrame(updatePosition);
}


// Attach event listener for mouse movement
document.addEventListener('mousemove', moveFormAwayFromCursor);

// Start the animation loop
updatePosition();
