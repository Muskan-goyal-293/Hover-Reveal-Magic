let center = document.querySelector(".center");
function throttle(fn, delay) {
  let isThr = false;

  return function (...args) {
    if (!isThr) {
      fn.apply(this, args);
      isThr = true;

      setTimeout(() => {
        isThr = false;
      }, delay);
    }
  };
}

let imgarr = [
  "https://images.unsplash.com/photo-1743550455435-7a635c585ceb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1750386167740-3596e3cfaec1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1742933779258-066ced2b3c2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1751378639510-bce715a90547?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1747738304810-5cb89f585299?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1751076547514-e647a5dd3ef7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1659959104077-d7f31aa44d92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1750236114618-1ab9d31bb94d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1751162119945-916f495ed87f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1750317246680-8e0c19023ec5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1748392029321-58793571f850?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1750711642160-efc6e052751a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1750672582677-bf38cf49e6e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDh8fHxlbnwwfHx8fHw%3D",
"https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvc3NvbXxlbnwwfHwwfHx8MA%3D%3D",
"https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymxvc3NvbXxlbnwwfHwwfHx8MA%3D%3D",
"https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyfGVufDB8fDB8fHww",
"https://images.unsplash.com/photo-1563387852576-964bc31b73af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyfGVufDB8fDB8fHww",
"https://plus.unsplash.com/premium_photo-1686729237226-0f2edb1e8970?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fHww",
"https://images.unsplash.com/photo-1512850183-6d7990f42385?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"];
let coun = 0;
let body = document.querySelector("body");
center.addEventListener(
  "mousemove",
  throttle((e) => {
    let div = document.createElement("div");
    div.classList.add("div");
    div.style.left = e.clientX + "px";
    div.style.top = e.clientY + "px";
    let img = document.createElement("img");
    img.setAttribute("src", imgarr[coun]);
    coun++;
    if (coun == imgarr.length) {
      coun = 0;
    }
    div.appendChild(img);
    body.appendChild(div);

    gsap.to(img, {
      y: 0,
      duration: 0.3,
      ease: Power3,
    });

    gsap.to(img, {
      y: 100,
      duration: 0.2,
      ease:Power2,
      delay: 1,
    });
    setTimeout(() => {
      div.remove();
    }, 2000);
  }, 500)
);
