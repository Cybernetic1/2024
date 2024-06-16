var values = "100%;40% 60%;20 350;50% 50%;true;10%".split(";"),
    currentIndex = 0;

//set the initial value
gsap.set("#path, #code", {visibility:"visible"});

function next() {

	gsap.to(".cube", { rotation: 360, duration: 2, }0);
	return;

  gsap.killTweensOf(next); //in case the user clicks, clear any delayed calls to this method. 
  if (++currentIndex === values.length) {
    currentIndex = 0;
  }
  if (values[currentIndex] === "true") {
    gsap.set("#current", {text:(values[currentIndex])});
  } else {
  	gsap.set("#current", {text:('"' + values[currentIndex] + '"')});
  }
  gsap.to("#path", {drawSVG:values[currentIndex], duration: 1, ease:"power1.inOut"});
  
}

document.querySelector("#next").addEventListener("click", next);
