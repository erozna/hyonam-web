// 1. Dynamic Mouse Glow Tracking
const glowCursor = document.getElementById('glow-cursor');

document.addEventListener('mousemove', (e) => {
    // 뷰포트 기준으로 마우스의 X, Y 좌표값을 할당
    glowCursor.style.left = `${e.clientX}px`;
    glowCursor.style.top = `${e.clientY}px`;
});

// 2. Glass Navbar Scroll Effect
const nav = document.querySelector('.glass-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 3. Scroll Reveal Animation for Elements
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Initial check on load
window.addEventListener("scroll", reveal);
reveal(); // Trigger once on page load
