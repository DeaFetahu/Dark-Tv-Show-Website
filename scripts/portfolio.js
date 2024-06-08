document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', function() {
            const projectName = this.querySelector('h3').textContent;
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
            };
            if (projectUrls.hasOwnProperty(projectName)) {
                window.location.href = projectUrls[projectName];
            } else {
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
