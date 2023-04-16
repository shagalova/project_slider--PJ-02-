let images = [{
  
  url: "file:///C:/Users/Admin/Desktop/%D0%98%D0%A2%20%D0%9E%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5/project_4/img/image%202.png",
  tabItem: "Rostov-on-Don, Admiral",
  title: "Rostov-on-Don, Admiral",
  specCity: "Rostov-on-Don LCD admiral",
  specArea: "81 m2",
  specTime: "3.5 months",
  specCost:"Upon request"
}, {
  url: "file:///C:/Users/Admin/Desktop/%D0%98%D0%A2%20%D0%9E%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5/project_4/img/image%202.1.png",
  tabItem: "Sochi Thieves",
  title: "Sochi Thieves",
  specCity: "Sochi Thieves",
  specArea: "105 m2",
  specTime: "4 months",
  specCost:"Upon request"
}, {
  url: "file:///C:/Users/Admin/Desktop/%D0%98%D0%A2%20%D0%9E%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5/project_4/img/image%203.png",
  tabItem: "Rostov-on-Don Patriotic",
  title: "Rostov-on-Don Patriotic",
  specCity: "Rostov-on-Don Patriotic",
  specArea: "93 m2",
  specTime: "3 months",
  specCost:"Upon request"
}];


function initSlider(options) {
  if (!images || !images.length) return;
  
  options = options || {
    titles: false,
    city: true,
    area: true,
    time: true,
    cost: true,
    dots: true,
    autoplay: false
  };
  
  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".controls");
  let specificsTextCity = document.querySelector(".city");
  let specificsTextArea = document.querySelector(".area");
  let specificsTextTime = document.querySelector(".time");
  let specificsTextCost = document.querySelector(".cost");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderTabs = document.querySelector(".block-tab");
 
  
  initImages();
  initArrows();
  initSpecifics();
  initTabs();

  
  if (options.dots) {
    initDots();
  }
  
  if (options.titles) {
    initTitles();
  }
  
  if (options.autoplay) {
    initAutoplay();
  }
  
  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  
  function initArrows() {
    sliderArrows.querySelectorAll(".arrows").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }
  
  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
      
    });
  
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }
  
  function initTabs() {
    images.forEach((image, index) => {
      let tab = `<p class="tab-item n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].tabItem}</p>`;
      let sliderTabs = document.querySelector(".block-tab");
    sliderTabs.innerHTML += tab;
    
  });
        sliderTabs.querySelectorAll(".tab-item").forEach(tab => {
      tab.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
    }
     
  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    sliderTabs.querySelector(".active").classList.remove("active");
    sliderTabs.querySelector(".n" + num).classList.add("active");
    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
    }
    if (options.titles) changeTitle(num);
    if (options.city) changeCity(num);
    if (options.area) changeArea(num);
    if (options.time) changeTime(num);
    if (options.cost) changeCost(num);
  }
  
   function initTitles() {
     let titleDiv = `<div class="slider__images-title">${images[0].title}</div>`;
     let sliderImages = document.querySelector(".slider__images");
     sliderImages.innerHTML += cropTitle(titleDiv, 50);
  }
  
  function changeTitle(num) {
    if (!images[num].title) return;
    let sliderTitle = sliderImages.querySelector(".slider__images-title");
    sliderTitle.innerText = cropTitle(images[num].title, 50);
  }
  
  function cropTitle(title, size) {
    if (title.length <= size) {
      return title;
    } else {
      return title.substr(0, size) + "...";
    }
  }
  
  function initSpecifics() {
    let specTextCity = `<div class="specifics-text text-city">${images[0].specCity}</div>`;
      specificsTextCity.innerHTML = specTextCity;
    let specTextArea = `<div class="specifics-text text-area">${images[0].specArea}</div>`;
    specificsTextArea.innerHTML = specTextArea;
    let specTextTime = `<div class="specifics-text text-time">${images[0].specTime}</div>`;
      specificsTextTime.innerHTML = specTextTime;
    let specTextCost = `<div class="specifics-text text-cost">${images[0].specCost}</div>`;
      specificsTextCost.innerHTML = specTextCost;
    
  }
 function changeCity(num) {
    if (!images[num].specCity) return;
    let specificsCity = specificsTextCity.querySelector(".text-city");
    specificsCity.innerText = images[num].specCity;
 }
  function changeArea(num) {
       if (!images[num].specArea) return;
    let specificsArea = specificsTextArea.querySelector(".text-area");
    specificsArea.innerText = images[num].specArea;
  }
   function changeTime(num) {
    if (!images[num].specTime) return;
    let specificsTime = specificsTextTime.querySelector(".text-time");
    specificsTime.innerText = images[num].specTime;
 }
   function changeCost(num) {
    if (!images[num].specCost) return;
    let specificsCost = specificsTextCost.querySelector(".text-cost");
    specificsCost.innerText = images[num].specCost;
 }
   
  function initAutoplay() {
    setInterval(() => {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, options.autoplayInterval);
  }
}

let sliderOptions = {
  dots: true,
  titles: false,
  city: true,
  area: true,
  time: true,
  cost: true,
  autoplay: false,
  autoplayInterval: 5000
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});