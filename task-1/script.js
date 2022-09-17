{
  let line2 = Array.from(document.querySelectorAll(".parent-affter"));

  let home = document.getElementById("back-home");

  let parentAffterTwo;

  let containerOne = document.querySelector(".container-one");

  let containerTwo = document.querySelector(".container-two");

  let containerThree = document.querySelector(".container-three");

  let inConBottom2 = document.querySelector(".in-con-bottom-1-1");

  let inRit2 = document.querySelector(".in-rit-2");
  let inRit22 = document.querySelector(".in-rit-2-2");

  let backs = document.querySelector(".back");

  let submit = document.getElementById("subm");

  let number = document.getElementById("number-phone");

  let cc = document.getElementById("ccInfo");

  // let fones =\Array document.querySelectorAll(".img-100");

  // console.log(fones);

  containerOne.classList.remove("disp-none");

  containerOne.style.display = "flex";

  line2.forEach((element, index) => {
    let cartona = ``;

    let cartonaTwo;

    let word = ``;

    element.addEventListener("click", (e) => {
      cartona = `${element.innerHTML}`;

      var navTop = document.getElementById("top");
      navTop.innerHTML = " " + element.id;

      containerTwo.children[1].innerHTML = cartona;

      containerOne.style.display = "none";

      containerOne.classList.add("disp-none");

      containerTwo.classList.remove("disp-none");

      containerOne.style.display = "flex";

      inRit2.innerHTML = `<div class="w200px parent-affter"> ${cartona} </div>`;

      cartonaTwo = `

    <div class="parent-affter-2" >
      <div class="serves" id="فواتير" >
        <p>فواتير  </p>
      </div>
    </div>

    <div class="parent-affter-2" >
      <div class="serves" id="ADSL" >
        <p>  ADSL </p>
      </div>
    </div>

    <div class="parent-affter-2" >
      <div class="serves" id="بطافات" >
        <p>  بطاقات </p>
      </div>
    </div>

    <div class="parent-affter-2" >
      <div class="serves" id="شحن" >
        <p>شحن </p>
      </div>
    </div>
 
 

    `;

      inConBottom2.innerHTML = cartonaTwo;

      parentAffterTwo = Array.from(
        document.querySelectorAll(".parent-affter-2")
      );

      functionName();
    });
  });

  async function functionName() {
    await parentAffterTwo.forEach((element) => {
      element.addEventListener("click", (e) => {
        containerTwo.classList.add("disp-none");
        containerThree.classList.remove("disp-none");
        containerThree.style.display = "flex";

        $("#top")[0].innerText = e.target.innerText;

        // inRit22.innerHTML = element.innerHTML;
      });
    });
  }

  backs.addEventListener("click", () => {
    containerOne.style.display = "flex";

    containerOne.classList.remove("disp-none");

    containerTwo.classList.add("disp-none");
  });

  let numbers = document.querySelectorAll(".num");

  let input = document.querySelector("#input");

  numbers.forEach((num) => {
    num.addEventListener("click", () => {
      input.value += num.innerText;

      var phoneno = /^[0-9]{11}$/;

      input.style.border = "none";
    });
  });

  let dle = document.querySelector(".dle");

  dle.addEventListener("click", () => {
    input.value = "";
  });

  home.addEventListener("click", () => {
    containerTwo.classList.add("disp-none");
    containerThree.classList.add("disp-none");
    containerOne.classList.remove("disp-none");
  });

  let regex = /01[0125][0-9]{8}$/;
  let checkphone = document.querySelector(".checkphone");

  submit.addEventListener("click", () => {
    if (regex.test(checkphone.value)) {
      cc.style.display = "flex";
      $("#page").css("overflow", "hidden");
    } else {
      number.innerText = "من فضلك ادخل رقمك بشكل صحيح";
    }
  });

  let Deleted = document.getElementById("Deleted");

  Deleted.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
  });
}

let charge = document.querySelectorAll(".charge");
let inputOne = document.getElementById("inputOne");
let inputstwo = document.getElementById("inputstwo");

if (inputOne.value != null) {
  inputstwo.value = inputOne.value;
}

charge.forEach((ele) => {
  ele.addEventListener("click", () => {
    inputOne.value = ele.innerText;
  });
});

let clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", () => {
  inputOne.value = "";
});

let getKeybord = document.querySelectorAll(".getKeybord");

getKeybord.forEach((num) => {
  num.addEventListener("click", () => {
    inputOne.value += num.innerText;
  });
});

let Deleted33 = document.getElementById("Deleted-33");

Deleted33.addEventListener("click", () => {
  inputOne.value = inputOne.value.slice(0, -1);
});

let lastBACK = document.getElementById("bACK");
let ccInfo = document.getElementById("ccInfo");
lastBACK.addEventListener("click", () => {
  input.value = "";
  ccInfo.style.display = "none";
});

ccInfo.addEventListener("click", () => {
  if (inputOne.value != null) {
    inputstwo.value = inputOne.value - inputOne.value * 0.3;
  }
});

// when entering card

let enterCard = document.getElementById("Enter-Card");
let cardAnmi = document.getElementById("card-entering");

enterCard.addEventListener("click", () => {
  if (inputOne.value == 0) {
    inputOne.style.border = "solid red 3px";
  } else {
    $(".parent-getKeybord").hide();
    $("#gif").show();
    $(".checkphone").value = "";
    var top = document.getElementById("#top");
  }
});
