let button = document.getElementById('scroll');
window.onscroll = function () {
    if (scrollY >= 400) {
        button.style.display = 'none'
    } else {
        button.style.display = 'inline-block'
    };
};
button.onclick = function () {
    scroll = ({
        left: 0,
        top: 0,
        behavior:"smooth"
    })
}