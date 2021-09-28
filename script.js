function run(agent) {
  agent.show();

  // add stuff here:
  agent.speak("hmmm...");

  setTimeout(function() {
    agent.speak("inspirational quote...");

    setTimeout(function() {
      agent.play('Congratulate');

      setTimeout(function() {
        agent.speak("Hello 1997!");

        agent.play("Pleased");

      }, 2000);
    }, 4000);
  }, 3000);
}


document.addEventListener('DOMContentLoaded', function() {
  clippy.load('Clippy', run);
});
