document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', function() {
            // Get the project title
            const projectName = this.querySelector('h3').textContent;

            // Define the mapping of project names to URLs
            const projectUrls = {
                'Dark': 'Movies/Dark/darkMain.html',
                'Dune': 'Movies/Dune/duneMain.html',
                'Spectre': 'Movies/Spectre/spectreMain.html',
                'Breaking Bad':' Movies/BreakingBad/breakingBad.html',
                'Suits':'Movies/Suits/suitsMain.html',
                'Friends':'Movies/Friends/friendsMain.html',
                'Interstellar':'Movies/Interstellar/interstellarMain.html',
                'The Hunger Games':'Movies/TheHungerGames/hungerGamesMain.html',
                'Harry Potter':'Movies/HarryPotter/harryPotterMain.html',
                'Game Of Thrones':'Movies/GameOfThrones/gameOfThronesMain.html',
                // Add more project names and URLs as needed
            };

            // Check if the clicked project has a corresponding URL
            if (projectUrls.hasOwnProperty(projectName)) {
                // Redirect to the corresponding page
                window.location.href = projectUrls[projectName];
            } else {
                // Handle cases where no URL is defined for the clicked project
                alert('No URL defined for this project');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var projects = document.querySelectorAll('.project');

    projects.forEach(function(project) {
        var video = project.querySelector('video');

        project.addEventListener('mouseenter', function() {
            video.play();
        });

        project.addEventListener('mouseleave', function() {
            video.pause();
            video.currentTime = 0;
        });
    });
});
