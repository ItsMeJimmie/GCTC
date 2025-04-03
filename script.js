function adjustPadding() {
    const header = document.querySelector('.top');
    const seperator = document.querySelector('.seperator');
    if (seperator) {
        seperator.style.paddingTop = header.offsetHeight + 'px';
    }
}

window.addEventListener('load', adjustPadding);
window.addEventListener('resize', adjustPadding);

function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("show");
}

function resizeVideoContainer() {
    let bodyWidth = document.body.clientWidth;
    let videoContainer = document.querySelector('.video-container');
    
    videoContainer.style.width = bodyWidth + 'px'  // Match body width
}

// Run on page load and window resize
window.addEventListener('load', resizeVideoContainer);
window.addEventListener('resize', resizeVideoContainer);
