const dot = "<img src='dot.png' height='50'></img>" //Let kids make the dots bigger or smaller if they want

async function start() {
    var dots = ""
    const number = random(10, 30) //Let kids choose this range
    for (var i = 0; i < number; i++) {
        dots += dot
    }
    document.getElementById("container").innerHTML = dots

    await wait(3) //Let kids choose how long to wait

    document.getElementById("container").innerHTML = ""
    await wait(1)
    var guess = window.prompt("How many dots was that?")
    if (guess == number) {
        window.alert("Nice job! You got it!")
    }
    else {
        window.alert("Close! It was " + number)
    }
}

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function wait(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
