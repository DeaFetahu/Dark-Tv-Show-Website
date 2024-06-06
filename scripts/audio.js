
      // Function to toggle audio playback
      function toggleAudio() {
          var audio = document.getElementById("background-audio");
          var audioControl = document.getElementById("audio-control");
          
          if (audio.paused) {
              audio.play();
              audioControl.classList.remove("fa-volume-off");
              audioControl.classList.add("fa-volume-up");
          } else {
              audio.pause();
              audioControl.classList.remove("fa-volume-up");
              audioControl.classList.add("fa-volume-off");
          }
      }