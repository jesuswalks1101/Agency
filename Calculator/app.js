let op; 
function func() {
  let result;
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  switch (op) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      if (n2) {
        result = n1 / n2;
      } else {
        result = 'infinity';
      }
      break;
    default:
      result = 'select operation';
  }

  document.getElementById("result").innerHTML = result;
}