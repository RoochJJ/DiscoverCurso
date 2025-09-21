
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light1.png")
    img.setAttribute('alt',"Foto de uma homem com toca, pensando em ideias, para uma solução de um problema.")
  } else {
    img.setAttribute("src", "./assets/avatar1.png")
    img.setAttribute(
      "alt",
      "Foto de homem com cabelo crespo, usando uma camisa preto, com simbolo de 1804 estampado na camisa."
    )
  }
}
