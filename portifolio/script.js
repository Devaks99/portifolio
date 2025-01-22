function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("link1")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToElement("header");
    });

    document.getElementById("link2")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToElement("section");
    });

    document.getElementById("link3")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToElement(".column");
    });
});
