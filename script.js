function run(agent) {
  agent.show();

  // add stuff here:
  agent.speak("I'm just annoying");

  setTimeout(function() {
    agent.speak("Trying to provide you your daily inspirational quote...");

    setTimeout(function() {
      agent.play('Why are you here?');

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
