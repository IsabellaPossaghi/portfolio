function run(agent) {
  agent.show();

  // add stuff here:
  setTimeout(function() {
    agent.moveTo(100,100);
    agent.speak("I'm just annoying");

    setTimeout(function() {
      agent.speak("Trying to provide you your daily inspirational quote...");
        agent.moveTo(350,100);

      setTimeout(function() {
        agent.speak("Do you think I'm useless? I'm worse: I'm annoying.");

        agent.play("Hellooooo my dear");

      }, 2000);
    }, 4000);
  }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
  clippy.load('Clippy', run);
});

var mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
  clippy.load('Clippy', run);
}
else {
    clippy.load('Clippy', run);
}
