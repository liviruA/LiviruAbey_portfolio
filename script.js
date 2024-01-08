function togglemenu(){
    const links = document.querySelector(".hamburger-links")
    const icon = document.querySelector(".hamburger-icon")
    const block = document.querySelector(".hamburger-block")
    links.classList.toggle("opened")
    icon.classList.toggle("opened")
    block.classList.toggle("opened")
}