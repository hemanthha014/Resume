// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 10,
            behavior: "smooth"
        });

        // Click animation
        this.classList.add("active-click");
        setTimeout(() => this.classList.remove("active-click"), 300);
    });
});

// Highlight active section on scroll
window.addEventListener("scroll", () => {
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    document.querySelectorAll("section").forEach(section => {
        if (scrollPos >= section.offsetTop - 60 && scrollPos < section.offsetTop + section.offsetHeight) {
            let id = section.getAttribute("id");

            document.querySelectorAll("nav ul li a").forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href").substring(1) === id) {
                    link.classList.add("active");
                }
            });
        }
    });
});
