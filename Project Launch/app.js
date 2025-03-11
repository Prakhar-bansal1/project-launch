// ============ SHOW MENU ====================

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
      const nav = document.querySelector(".nav-list")

      toggle.addEventListener("click", () => {
        //  Add show menu class to new menu
        nav.classList.toggle("show-menu");

        //  add show icons to show and hide the menu icons 

        toggle.classList.toggle("show-icons");
      });
}

showMenu("nav-toggle", "nav-menu");

// ========= Counter Section =============

let valueDisplay = document.querySelectorAll(".num");
let interval = 5000;

valueDisplay.forEach(valueDisplay => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duration);
});