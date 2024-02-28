import observer from "./observer.js";
import "./subscriber.js";

const circle = document.querySelector('#circle');

document.addEventListener("scroll", () => {
  const y = window.scrollY;

  const rect = circle.getBoundingClientRect();

  console.log(window.innerHeight)

  console.log(rect)

  if(rect.top - window.innerHeight < 0) {
    observer.notify("Circle is in the viewport!");
  }
})
































// // Import your observer and analytic modules
// import observer from "./observer.js";
// import "./analytic.js";

// const circle = document.querySelector('#circle');

// // Function to check if the circle is in the viewport
// function isElementInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Function to notify the observer
// function notifyObserver() {
//   observer.notify("Circle is in the viewport!");
// }

// // Event listener for scroll
// window.addEventListener("scroll", () => {
//   const y = window.scrollY;
//   console.log("y: ", y);

//   // Check if the circle is in the viewport
//   if (isElementInViewport(circle)) {
//     // Notify the observer when the circle is in the viewport
//     notifyObserver();
//   }
// });

// // Additional logic or code as needed
