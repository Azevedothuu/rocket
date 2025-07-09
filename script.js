function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  //img agora
  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "homem de oculos preto e casaco preto");
  } else {
    img.setAttribute("alt", "homem de camisa preta sorrindo");
  }
}

function exibirAlerta() {
  alert("Em fase de Construção!");
}
