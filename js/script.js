console.log("Cześć to ja Basia probuje coś działać");

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let nextColor = document.querySelector(".nextColor");

 
button.addEventListener("click", () => {
    body.classList.toggle ("inerBody");

    nextColor.innerText = body.classList.contains("inerBody") ? "ciemny" : "jasny";
});

  // if (body.classList.contains("body")) {
    //    nextColor.inerText = "jasny"; 
  //  } else { 
  //      nextColor.inerText = "ciemny";
  //  });
