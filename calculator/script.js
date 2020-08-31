function start() {
  const op = window.prompt(
    "Choose an operation:\n \nType + for addition\nType - for subtraction\n Type * for multiplcation\nType / for division"
  )
  const num1 = parseInt(window.prompt("First number:"))
  const num2 = parseInt(window.prompt("Second number:"))
  switch (op) {
    case "+":
      window.alert("The answer is " + (num1 + num2))
      break;
    case "-":
      window.alert("The answer is " + (num1 - num2))
      break;
    case "*":
      window.alert("The answer is " + (num1 * num2))
      break
    case "/":
      window.alert("The answer is " + (num1 / num2))
      break;
    default:
      window.alert("Invalid operation!")
  }
}
