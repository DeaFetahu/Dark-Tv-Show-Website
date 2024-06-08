document.addEventListener("DOMContentLoaded", function() {
    var loadingContainer = document.querySelector('.loading-container');
    var textContainer = document.querySelector('.text-container');
      setTimeout(function() {
      loadingContainer.style.display = 'none';
      textContainer.style.display = 'block';
      document.querySelector('.main-content').style.display = 'block';
      document.getElementById('background-video').classList.add('video-visible');
    },2500);
});

document.querySelectorAll('.continue-button').forEach(button => {
  button.addEventListener('click', function() {
      const url = this.getAttribute('data-url');
      window.location.href = url;
  });
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var continueButton = document.querySelector('.continue-button');
      continueButton.style.display = 'block'; 
    }, 4500); 
});

function toggleMenu() {
  var menu = document.querySelector('.menu');
  var menuToggle = document.querySelector('.menu-toggle');
  
  menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
    menuToggle.style.left = '340px'; 
  } else {
    menuToggle.style.left = '20px'; 
  }
}

document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;
    const cursor = document.querySelector('.cursor');
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});
