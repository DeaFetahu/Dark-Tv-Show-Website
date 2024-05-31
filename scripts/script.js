document.addEventListener("DOMContentLoaded", function() {
    // Get the loading container and text container
    var loadingContainer = document.querySelector('.loading-container');
    var textContainer = document.querySelector('.text-container');
  
    // After 4 seconds, hide the loading container, show the text container and main content
    setTimeout(function() {
      loadingContainer.style.display = 'none';
      textContainer.style.display = 'block';
      document.querySelector('.main-content').style.display = 'block';
      // Add the class to make the video visible
      document.getElementById('background-video').classList.add('video-visible');
    });
});

// Function to handle "Continue" button click
function continueClicked() {
    // Redirect to the second page (Main.html)
    window.location.href = "secondPage.html";
}

// Fade in the "Continue" button after a delay
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var continueButton = document.querySelector('.continue-button');
      continueButton.style.display = 'block'; // Show the button
    }, 6500); // Adjust the delay as needed
});

function toggleMenu() {
  var menu = document.querySelector('.menu');
  var menuToggle = document.querySelector('.menu-toggle');
  
  menu.classList.toggle('active');
  
  // Update position of menu toggle button when menu is opened or closed
  if (menu.classList.contains('active')) {
    menuToggle.style.left = '340px'; // Adjust position based on menu width
  } else {
    menuToggle.style.left = '20px'; // Reset position when menu is closed
  }
}

// Add cursor movement logic
document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;
  
  // Set cursor position
  const cursor = document.querySelector('.cursor');
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});
