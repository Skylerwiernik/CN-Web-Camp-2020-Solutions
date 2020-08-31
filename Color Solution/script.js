function update() {
  const red = parseInt(document.getElementById("red").value).toString(16)
  const green = parseInt(document.getElementById("green").value).toString(16)
  const blue = parseInt(document.getElementById("blue").value).toString(16)

  const color = "#" + red + green + blue

  document.body.style.background = color
}

update()
