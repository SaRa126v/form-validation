// style (focus & blur)........................
let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  // onClick................................
  input.addEventListener("click", (e) => {
    // remove all activeInput classes
    document.querySelector(".activeInput")?.classList.remove("activeInput");

    // then add it to this one again
    e.target.parentElement.classList.add("activeInput");

    // remove hover
    document.querySelector(".hoverInput")?.classList.remove("hoverInput");

    // add legend
    input.parentElement.firstElementChild.style.display = "block";

    // remove svg
if (input.previousElementSibling.classList.contains("firstSvg") ) {
  input.previousElementSibling.remove();
}

    // remove placeholder
    input.placeholder = '';

  });

  // onMouseMove..............................
  input.addEventListener("mousemove", (e) => {
    // if active remove hover
    // if not add hover
    if (e.target.parentElement.classList.contains("activeInput")) {
      e.target.parentElement.classList.remove("hoverInput");
    } else {
      e.target.parentElement.classList.add("hoverInput");
    }
  });
});

// when somewhere else is clicked remove active input
window.addEventListener("click", (e) => {
  // variables
  let test = document.querySelector(".activeInput");
  let html = document.querySelector("html");
  let body = document.querySelector("body");
  let container = document.querySelector("#container");

  if (e.target == html || e.target == body || e.target == container) {
    // if this class exists
    if (test !== null) {
      test.classList.remove("activeInput");
    }
  }
});

// **********************************
// این جواب نمیده مجبور شدم همرو دونه دونه سلکت کنم
// (e.target !== inputParents)
// **********************************

//..................................................................................

// اینا برای اینپوت هستن ک بدردم نمیخورن
// style.........................................

// let inputParents = document.querySelectorAll(".input");

// inputParents.forEach((inputParent) => {
//   // onFocus................................
//   inputParent.addEventListener("focus", () => {

//     inputParent.classList.add("activeInput");
// console.log("fuck you");
//   });

//   // onBlur................................
//   inputParent.addEventListener("blur", () => {

//     inputParent.classList.remove("activeInput");

//   });
// });
