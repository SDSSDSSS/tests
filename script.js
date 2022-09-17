let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
var back = document.getElementById("back-home");
let backEng = document.getElementById("back-home-eng");
let dark = document.getElementById("dark");
let light = document.getElementById("light");
let page = document.getElementById("page");
let mobile = document.getElementById("Mobile-services");
let services = document.getElementById("services");
let pages = document.getElementById("pages");
let nav = document.getElementById("nav");
let mobEng = document.getElementById("mobile-servicesEng");
let ccHome = document.getElementById("logo-home");

ccHome.addEventListener("click", () => {
  $(".CC-info").hide();
  $("services-arabic").hide();
  $(".page-task").hide();
  $(".home").show();
  $(".arabic-nav").hide();
  $("#page").css("overflow", "auto");

});

arabic.addEventListener("click", () => {
  $(".home").hide();
  $(".services-arabic").show();
  $(services).show();
  $(".arabic-nav").show();
  show();
});
english.addEventListener("click", () => {
  // $(".home").hide();
  // $(".services-english").fadeIn();
  // show();

  alert("sorry this service not Avilable for now");
});

back.addEventListener("click", () => {
  $(".home").fadeIn();
  $(".services-arabic").hide();
  $("#pages").hide();
  hide();
});

backEng.addEventListener("click", () => {
  $(".home").fadeIn();
  $(".services-english").hide();
  hide();
});

dark.addEventListener("click", () => {
  $("body").css("background-color", "#0c2337");
  $("p").css("color", "white");
  $(".num").css("background", "#f37631");
  $(".CC-info").css("background", "#0c2337");
  $("#bACK").css("background", "transparent");
  $("#bACK").css("color", "black");
  $("span").css("color", "white");
  $(".dark").hide();
  $(".light").fadeIn();
  arabic.style.backgroundColor = "#f37631";
  document.getElementById("logo-main").src =
    "imgs/296086906_5325494487537129_184201910671316763_n.png";
  document.getElementById("logo-arabic").src =
    "imgs/296086906_5325494487537129_184201910671316763_n.png";
  document.getElementById("logo-english").src =
    "imgs/296086906_5325494487537129_184201910671316763_n.png";
  document.getElementById("logoCC").src =
    "imgs/296086906_5325494487537129_184201910671316763_n.png";

  stop();
});

light.addEventListener("click", () => {
  $("body").css("background-color", "white");
  $("p").css("color", "#1d3955");
  $("span").css("color", "#1d3955");
  $(".dark").fadeIn();
  $(".light").hide();
  $(".CC-info").css("background", "white");
  arabic.style.backgroundColor = "#1d3955";
  document.getElementById("logo-main").src = "imgs/Capture.JPG";
  document.getElementById("logo-arabic").src = "imgs/Capture.JPG";
  document.getElementById("logo-english").src = "imgs/Capture.JPG";
  stop();
});

function show() {
  $(".nyaba1").delay(1).slideDown().fadeIn();
  $(".nyaba2").delay(1).slideDown().fadeIn();
  $(".nyaba3").delay(1).slideDown().fadeIn();
  $(".nyaba4").delay(1).slideDown().fadeIn();
  $(".nyaba5").delay(1).slideDown().fadeIn();
  $(".nyaba6").delay(1).slideDown().fadeIn();
  $(".nyaba7").delay(1).slideDown().fadeIn();
  $(".nyaba8").delay(1).slideDown().fadeIn();
}

function hide() {
  $(".nyaba").hide();
}

mobile.addEventListener("click", () => {
  $(services).hide();
  $(pages).show();
  $(nav).hide();
  containerone.style.display = "flex";
});

mobEng.addEventListener("click", () => {
  $(".services").hide();
  $(".page-task-eng").fadeIn();
});

let backOne = document.getElementById("back-one");

backOne.addEventListener("click", () => {
  $(".home").show();
  $(".services-arabic").hide();
  $(".container-one").show();
  $(".container-one").hide();
});

let backTwo = document.getElementById("back-two");
let containerone = document.querySelector(".container-one");

// $(".container-one").show();

containerone.style.display = "flex";

backTwo.addEventListener("click", () => {
  $(".services").show();

  containerone.style.display = "none";
  $(".container-one").hide();
});

let backThree = document.getElementById("back-three");

let containertwo = document.querySelector(".container-two");

let containerthree = document.querySelector(".container-three");

backThree.addEventListener("click", () => {
  containertwo.style.display = "flex";
  containertwo.classList.remove("disp-none");

  containerthree.classList.remove("disp-none");

  containerthree.style.display = "flex";

  $(".container-three").hide();
});
