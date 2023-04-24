const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const liArr = document.querySelectorAll('li');
const [nav1, nav2, nav3, nav4, nav5] = liArr;

function navAnimation(direction1, direction2) {
    liArr.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`);
    });
    }

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        // Animate In - Nav Items
        navAnimation("out", "in");
    } else {
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate Out - Nav Items
        navAnimation("in", "out");

    }
}
// Event Listeners
menuBars.addEventListener('click', toggleNav);
liArr.forEach((li) => {
    li.addEventListener('click', toggleNav);
});
