function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.left === "0px") {
        menu.style.left = "-800px";
    } else {
        menu.style.left = "0";
    }
}

function closeMenu() {
    const menu = document.getElementById("menu");
    menu.style.left = "-800px";
}