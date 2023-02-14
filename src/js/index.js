window.onload = () => {
    const navLinks = document.querySelectorAll("a.nav-link");
    const sections = [...navLinks].map(link => {
        return document.querySelector(link.getAttribute("href"))
    });

    window.addEventListener("scroll", navHighlighter);
    function navHighlighter () {
        let scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 116;
            const sectionId = section.getAttribute("id");
            if (
                scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight
            ) {
                document.querySelector(".modal a.nav-link[href*=" + sectionId + "]").classList.add("active");
                document.querySelector(".navbar a.nav-link[href*=" + sectionId + "]").classList.add("active");
            } else {
                document.querySelector(".modal a.nav-link[href*=" + sectionId + "]").classList.remove("active");
                document.querySelector(".navbar a.nav-link[href*=" + sectionId + "]").classList.remove("active");
            }
        });
    }
}



