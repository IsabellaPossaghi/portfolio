Draggable.create(".draggable", {
  bounds: window
});

$(".window__caption--button").click(function() {
  $(this).parents(".window").removeClass("window--opened");
});

$(".icon").click(function() {
  $(".window--img").addClass("window--opened").css({
    top: "100px",
    left: "50%"
  });
});


$(".warning").click(function() {
  $(this).css({
    "z-index": "-100 !important"
  })

  var warning = new TimelineLite()
    //.fromTo(".window, .icon", 0.01, {x: -5, y: 5}, {x: 5, y: -5, repeat: -1})
    .to(".overlay--top, .overlay--bottom", 0.3, {
      delay: 0.5,
      scaleY: 1,
      ease: Expo.easeInOut
    })
    .to(".overlay--left, .overlay--right", 0.5, {
      scaleX: 1,
      ease: Expo.easeInOut
    })
});



// var images = [
//   "./img/mag_4.png",
//   "./img/mag_2.png",
//   "./img/mag_3.jpg"
// ];

// var images = [
//   "./img/map_focus_1.png",
//   "./img/map_focus_2.png",
//   "./img/map_focus_3.png"
// ];
//
// function displayImage(){
//     var num = Math.floor(Math.random() * (images.length+1))
//     document.canvas.src = images[num];
// }

document.getElementById('mage').src = "https://i.ibb.co/6FmzrPT/yt.gif";


// init();
//
// function random_image(images) {
//   var random = randomize(images);
//   while (images[random] === document.getElementById('mage').src) {
//     random = randomize(images)
//   }
//   document.getElementById('mage').src = images[random].toString();
// }
//
// function randomize(array) {
//   return Math.floor((Math.random() * (array.length)));
// }

// document.getElementById('mage').src = "./img/mag_4.png";

// function init() {
//
//   var icon = document.getElementById('icon');
//   if (icon) {
//     icon.addEventListener("click", function() {
//       random_image(images);
//     });
//     random_image(images);
//   }
// }



  function scrollToTop() {

window.scrollTo({top: 0, behavior: 'smooth'});

}
