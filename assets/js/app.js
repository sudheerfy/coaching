// //Get the button
// let backT = document.querySelector(".scroll-to-top");
      
// // When the user clicks on the button, scroll to the top of the document
// backT.addEventListener("click", backToTop);

// function backToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// // When the user clicks on the footer link, expand and collapse quick action list of the document
// let quickAction = document.getElementsByClassName("quick-actions-list-container");
// let i;

// for (i = 0; i < quickAction.length; i++) {
//   quickAction[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//     });
// }

// book card sliders

let bookContainers = [...document.querySelectorAll('.book-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

bookContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth - 200;
  })

  preBtns[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth + 200;
  })
})