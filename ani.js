const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
//toggle nav
    burger.addEventListener('click', () => {
         nav.classList.toggle('nav-active');

 //animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        }
        else{
            link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 +2}s`;
        }
    });
    //Burger animation
    burger.classList.toggle('toggle');

    });
}
navSlide();

const scene = new Scene({
    ".container": {}
  }, {
    selector: true,
  });
  
  const item = scene.getItem(".container");
  
  
  function move(startTime, endTime, left, top, rotate, scale) {
    item.set({
      [`${startTime}, ${endTime}`]: Scene.kineticFrame({
        left: `${left}px`,
        top: `${top}px`
      }).set({
        transform: {
          rotate: `${rotate}deg`,
          scale,
        }
      }),
    });
  }
  
  
  move(0, 0, 90, 115, 0, 5);
  move(1, 1, 90, 115, 0, 2);
  move(2, 3, 0, 115, 0, 1);
  move(4, 4.5, -100, 0, -90, 2);
  move(5.5, 6, -52, -18, -90, 1.6);
  move(7, 7.5, 30, 45, 0, 2);
  move(8.5, 9,  10, 30, 0, 3);
  move(10, 10.5, 28, 0, 0, 2.2);
  move(11.5, 12, 50, -35, 0, 1.65);
  move(13, 13.5, 35, -70, 0, 2);
  move(14.5, 18, 0, 0, 0, 1);
  
  

  scene.set({
    "[data-typing='i']": Scene.typing({ text: "I ", duration: 1}),
    "[data-typing='frontend']": {
      1: Scene.typing({ text: "'m Front-End", duration: 1}),
    },
    "[data-typing='aspiring']": {
      1.5: Scene.typing({ text: "aspriring", duration: 1}),
    },
    "[data-typing='fullstack']": {
      3.3: Scene.typing({ text: "Full-stack", duration: 0.5}),
    },
    "[data-typing='engineer']": {
      4.5: Scene.typing({ text: "Engineer", duration: 1}),
    },
    "[data-typing='in']": {
      6: Scene.typing({ text: "in", duration: 1}),
    },
    "[data-typing='sacramento']": {
      7.5: Scene.typing({ text: "Sacramento", duration: 0.7}),
    },
  });
  
  scene.setPlaySpeed(1);
  scene.setEasing("ease-in-out");
  scene.setIterationCount("infinite");
  scene.play();
