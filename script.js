function adjustPadding() {
    const header = document.querySelector('.top');
    const seperator = document.querySelector('.seperator');
    if (seperator) {
        seperator.style.paddingTop = header.offsetHeight + 'px';
    }
}

window.addEventListener('load', adjustPadding);
window.addEventListener('resize', adjustPadding);

