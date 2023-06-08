let btnnav = document.querySelector(".button-nav");
let nav = document.querySelector(".nav");

btnnav.addEventListener("click", function () {
  btnnav.classList.toggle("active");
  nav.classList.toggle("active");
});

let lang = document.querySelector(".lang");
let langop = document.querySelector(".lang-option");
let langoption = document.querySelectorAll(".lang-option span");
let currlang = document.querySelector(".lang span");

lang.addEventListener("click", function (e) {
  e.stopPropagation();

  langop.classList.toggle("active");
  window.addEventListener("click", function () {
    langop.classList.remove("active");
  });
});

langoption.forEach(function (element) {
  element.addEventListener("click", function () {
    let curritem = currlang.innerHTML;
    currlang.innerHTML = element.innerHTML;
    this.innerHTML = curritem;
  });
});

function ShowSliderBanner() {
  var elemm = document.querySelector(".banner-slider");
  if (typeof elemm != "undefined" && elemm != null) {
    var flkty = new Flickity(elemm, {
      // options
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      pageDots: false,
      prevNextButtons: false,
      on: {
        ready: function () {},
        change: function (index) {},
      },
    });

    var previousButton = document.querySelector(".next");
    previousButton.addEventListener("click", function () {
      flkty.next(true);
    });
    var previousButton = document.querySelector(".prev");
    previousButton.addEventListener("click", function () {
      flkty.previous(true);
    });
  }
}

ShowSliderBanner();

function showSliderBrand() {
  var elem = document.querySelector(".brand");
  if (typeof elem != "undefined" && elem != null) {
    var flkty = new Flickity(elem, {
      // options
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      pageDots: false,
      prevNextButtons: false,
      freeScroll: true,
    });
  }
}
showSliderBrand();

function showSliderDesti() {
  var elem = document.querySelector(".desti .container");
  if (typeof elem != "undefined" && elem != null) {
    var flkty = new Flickity(elem, {
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      pageDots: false,
      prevNextButtons: false,
      freeScroll: true,
    });
  }
}
showSliderDesti();

function showSliderValue() {
  var elem = document.querySelector(".value");
  if (typeof elem != "undefined" && elem != null) {
    var flkty = new Flickity(elem, {
      // options
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      pageDots: false,
      prevNextButtons: false,
      freeScroll: true,
    });
  }
}
showSliderValue();

function showSliderService() {
  var elem = document.querySelector(".slider");
  console.log(elem);
  if (typeof elem != "undefined" && elem != null) {
    // Exists.
    var flkty = new Flickity(elem, {
      // options
      cellAlign: "left",
      contain: true,
      wrapAround: true,
      pageDots: true,
      prevNextButtons: false,
      freeScroll: false,
    });
  }
}
showSliderService();
