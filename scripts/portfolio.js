// Code for PixiJS gaming element can go here

// Function to handle click on portfolio projects
document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', function() {
            // Replace with code to display project details
            alert(`Clicked on ${this.querySelector('h3').textContent}`);
        });
    });
});
