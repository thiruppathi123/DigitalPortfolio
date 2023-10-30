AOS.init();

function skills() {
  let skills = document.querySelector("#skills");
  skills.style.display = "block";
  let education = document.querySelector("#education");
  education.style.display = "none";
}

function education() {
  let skills = document.querySelector("#skills");
  skills.style.display = "none";
  let education = document.querySelector("#education");
  education.style.display = "block";
}

function change() {
  let element = document.body;
  element.classList.toggle("light-mode");
  let three=document.querySelector(".nav-three");
  three.classList.toggle("light");
  let a=document.querySelector(".nav-one");
  a.classList.toggle("light");
  let b=document.querySelector(".nav-two");
  b.classList.toggle("light");
  let subTitle=document.querySelector(".sub-title");
  subTitle.classList.toggle("light");
  let para1=document.querySelector(".para-1");
  para1.classList.toggle("dodgerblue");
}

