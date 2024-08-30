function somar(num1, num2) {
  const result = num1 + num2;
  if (typeof result !== "number") {
    return "Erro";
  }
  return result;
}

exports.somar = somar;
