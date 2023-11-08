{ 
const welcome = () => {
  console.log("Cześć to ja Basia probuje coś działać");
}

const toggleBackground = () => {
  const body = document.querySelector(".body");
  const nextColor = document.querySelector(".nextColor");

  body.classList.toggle ("inerBody");
  nextColor.innerText = body.classList.contains("inerBody") ? "ciemny" : "jasny";
};

const init = () => { 
  const button = document.querySelector(".button");
  button.addEventListener("click", toggleBackground);
  
  welcome();
}; 

init(); 
} 
 

//() => {
  //body.classList.toggle ("inerBody");

 // nextColor.innerText = body.classList.contains("inerBody") ? "ciemny" : "jasny";
//});

//
  // if (body.classList.contains("body")) {
    //    nextColor.inerText = "jasny"; 
  //  } else { 
  //      nextColor.inerText = "ciemny";
  //  });

  //function welcome () {
  //  console.log("Cześć to ja Basia probuje coś działać");
 // }

 // let onChangeBackgrundClick = () => {
  // body.classList.toggle ("inerBody");
  // nextColor.innerText = body.classList.contains("inerBody") ? "ciemny" : "jasny";
//};