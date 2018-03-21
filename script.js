document.addEventListener("click", openSlideMenu());
document.addEventListener("click", closeSlideMenu());


function openSlideMenu(){
    document.getElementById('side-menu').style.width = '100vw';
}
function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0px';
}
