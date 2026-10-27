
const menuToggle = document.getElementById("menu-toggle")
const navLinks = document.getElementById("nav-links")

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show")
  menuToggle.setAttribute("aria-expanded", String(isOpen))
})
